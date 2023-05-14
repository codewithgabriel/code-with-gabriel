const express = require('express');
const route = express.Router();


const indexRoute = route.use((request , response)=>{
    response.write("index");
    response.end();

})


module.exports = indexRoute ;
