const { response, request } = require( 'express' );
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generarJWT.JS');

const login = async ( req=request, res= response) =>{

    const { correo , password } = req.body;

    try {
        
        // Verificar si el correo existe
        const usuario = await Usuario.findOne( {correo} )

        if(  !usuario ){
            return   res.status(400).json({
                        msg:'Usuario / Password incorrectos - correo',
                        correo
                    })  
        }

        // Si el usuario esta Activo
        if(  !usuario.estado ){
            return   res.status(400).json({
                        msg:'Usuario / Password incorrectos - estado - false',
                        correo
                    })
        }

        //Verificar la contraseña

        const validPassword = bcryptjs.compareSync( password, usuario.password )
        if( !validPassword ){
            return   res.status(400).json({
                        msg:'Usuario / Password incorrectos - password',
                        correo
                    })
        }


        // Generar el JWT

        const token = await generarJWT( usuario.id );

        return res.json({
            msg:'Login',
            correo,
            token,
            usuario
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Hable con el Admi'
        })
    }


    
}

module.exports = {
      login
}