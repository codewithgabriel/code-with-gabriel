let express = require('express');
let route = express.Router()

let subscribeRouter = route.use((request , response)=>{
    response.render('subscribe' , {title: "Passsword Reset"});
    response.end();
});



module.exports = subscribeRouter;
