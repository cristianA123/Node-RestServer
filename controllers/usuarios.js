const { response, request } = require( 'express' );


const usuariosGet = (req = request, res= response) => {

    const {q, nombre = "no ingreso nombre", apikey} = req.query;


    res.json({
        msg: 'GET API - Controlador',
        q,
        apikey
    });
};

const usuariosPut = (req, res =response ) => {

    const id = req.params.id

    res.json({
        msg: 'PUT API  - Controlador',
        id
    });
}

const usuariosPost = (req, res =response) => {

    const {nombre, edad} = req.body;

    res.json({
        'ok':true,
        msg: 'POST API',
        nombre,
        edad
    });
}
const usuariosPath   =(req, res) => {
    res.json({
        'ok':true,
        msg: 'PATCH API'
    })
}
const usuariosDelete = (req, res) => {
    res.status(200).json({
        'ok':true,
        msg: 'DELETE API'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPath,
    usuariosDelete
}
