const peticion = require('../helpers/peticion');
const Role = require('../models/role');

const customRol = async( role = '')=>{
    const validar = await Role.findOne({role});
    if(!validar){
        throw new Error(`El rol ${role} no existe`);
    }
}
const cursoExist = async(idCurso = '')=>{
        const body = await  peticion('curso');
        const verificar = body.cursos.find(c=>c.id === idCurso);
        if(!verificar || !body.ok ){
            throw new Error(`El curso no existe`);
        }
}
const colegioExist = async(idColegio = '')=>{
    const body = await peticion('colegio');
    const verificar = body.colegios.find(c=>c.id === idColegio);
    if(!verificar || !body.ok ){
        throw new Error(`El colegio no existe`);
    }
}
const unidadExist = async(idUnidad = '')=>{
    const body = await peticion('unidad');
    const verificar = body.unidades.find(c=>c._id === idUnidad);
    if(!verificar || !body.ok ){
        throw new Error(`La unidad no existe`);
    }           
}

module.exports = {
    customRol,
    cursoExist,
    colegioExist,
    unidadExist
}