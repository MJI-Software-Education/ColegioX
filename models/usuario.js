const {model, Schema} = require('mongoose');


const UsuarioSchema = new Schema({
    idCurso:{
        type:String,
        required:true
    },
    idColegio:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:false
    },
    apellido:{
        type:String,
        required:false
    },
    usuario:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'USUARIO'
    },
    asignaturas:[{
        type:String,
    }],
    asistencia:[{
        type:Schema.Types.ObjectId,
        ref:'Asistencia'
    }],
    status:{
        type:Boolean,
        default:true
    }
});

module.exports = model('Usuario',UsuarioSchema);