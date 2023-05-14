const express = require('express');
const route = express.Router();


let contactRouter = route.use((request , response)=>{
    response.render("contact" , {title: "Contact Us"})
    response.end();
});


module.exports= contactRouter;
