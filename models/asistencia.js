const { Schema, model } = require('mongoose');

const asistenciaSchema = Schema({
    idUsuario:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:true
    },
    idCurso:{
        type:String,
        required:false
    },
    idColegio:{
        type:String,
        required:false
    },
    fecha: [{
        type: Date,
        required:true
    }],
    presente: {
        type: Boolean,
        default: true
    }
});

asistenciaSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Asistencia', asistenciaSchema );