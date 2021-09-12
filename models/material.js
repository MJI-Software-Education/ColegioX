const { Schema, model } = require('mongoose');

const materialSchema = Schema({
    idColegio: {
        type: String,
        required:true
    },
    idCurso: {
        type: String,
        required:true
    },
    idUnidad: {
        type: String,
        required:true
    },
    material: {
        type: String,
        required:true
    },
    status: {
        type: Boolean,
        default: false
    }
});

materialSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Material', materialSchema );