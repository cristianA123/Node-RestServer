const express = require('express')
var cors = require('cors');
const { dbConnection } = require('../database/connection.js');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath ="/api/usuarios" 
        this.authPath ="/api/auth" 

        //Conectyar a la base de datos:
        this.conectarBD();
        
        // Middlewares
        this.middlewares();


        // Rutas de mi aplicacion
        this.route();
    }

    async conectarBD(){
        await dbConnection();
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

        this.app.use( this.authPath, require('../routes/auth.js') );
        this.app.use( this.usuariosPath, require('../routes/usuarios.js') );

    }

    listen(){
        this.app.listen( this.port , ()=>{
            console.log("Corriendo en el puerto", this.port )
        })
    }


}



module.exports = Server;