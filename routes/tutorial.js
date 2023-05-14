const express = require('express');
const route = express.Router();


let tutorialRoute = route.use((request , response)=>{
        response.render('tutorial' , {title: 'Tutorial'});
        response.end();
});

module.exports = tutorialRoute;