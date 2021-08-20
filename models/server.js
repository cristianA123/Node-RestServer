const express = require('express')
var cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath ="/api/usuarios" 

        // Middlewares
        this.middlewares();


        // Rutas de mi aplicacion
        this.route();
    }

    middlewares(){

        //cors
        this.app.use( cors() )

        //Lectura y parseo del body
        this.app.use(  express.json() );

        // Directorio publico
        this.app.use( express.static('public') );

    }

    route(){

        this.app.use( this.usuariosPath, require('../routes/usuarios.js') );

    }

    listen(){
        this.app.listen( this.port , ()=>{
            console.log("Corriendo en el puerto", this.port )
        })
    }


}



module.exports = Server;