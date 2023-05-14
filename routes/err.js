let express = require('express');
let route = express.Router()

let errRoute = route.use((request , response)=>{
    response.statusCode = 404;
    response.render('404', {title: "Error | 404" , errStatus: response.statusCode });
    response.end();
})

module.exports = errRoute;
