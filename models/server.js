const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const dbConection = require('../db/dbconection');

class Server {

    constructor(){
        this.app = express();
        this.port=process.env.PORT;
        this.server=http.createServer(this.app);
        this.auth = '/api/auth';
        this.usuarios = '/api/usuarios';
        this.asistencia = '/api/asistencia';
        this.material = '/api/material';
        this.tareas = '/api/tareas';
        this.enunciados = '/api/enunciados';
        this.items = '/api/items';
        dbConection();
    }

    middlewares() {
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(this.auth,require('../routes/auth'));
        this.app.use(this.usuarios,require('../routes/usuarios'));
        this.app.use(this.asistencia,require('../routes/asistencia'));
        this.app.use(this.material,require('../routes/material'));
        this.app.use(this.tareas,require('../routes/tarea'));
        this.app.use(this.enunciados,require('../routes/enunciado'));
        this.app.use(this.items,require('../routes/item'));
       
    }

    init(){
        this.middlewares();
        this.server.listen(this.port, ()=>{
        console.log(`Server corriendo en el puerto : ${this.port}`)
        })
    }

}

module.exports = Server;