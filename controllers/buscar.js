const { response, request } = require('express');

const coleccionesPermitidas = [
    'usuario',
    'categoria',
    'productos',
    'roles'
];

const buscarUsuarios = async( termino = '', res = response )=>{


    

}


const buscar = ( req = request,res = response ) =>{

    const { coleccion,termino } = req.params

    if( coleccionesPermitidas.includes( coleccion ) ){
        return res.status(400).json({
            msg : `las colecciones permitidas son ${ coleccionesPermitidas }`
        })
    }

    switch (key) {
        case 'usuario':
            
            break;
        case 'categoria':
        
            break;
        case 'productos':
    
            break;
        default:
            return res.status(500).json({
                msg:"Se me olvido hacer esta busqueda"
            });
    }


    res.json({
        msg: 'Buscar ...',
        coleccion,
        termino
    })

}


module.exports = {
    buscar
}
