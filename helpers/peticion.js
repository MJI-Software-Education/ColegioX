const axios = require("axios");
const baseURL = process.env.BASE_URL;
const peticion = async(endpoint)=>{
        const resp = await axios({url:`${baseURL}/${endpoint}/`,method:'get'});
        const body = JSON.parse(JSON.stringify(resp.data));
        return body;
}
module.exports = peticion;