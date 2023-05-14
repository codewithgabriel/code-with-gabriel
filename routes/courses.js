const express = require('express');
const route = express.Router();


let coursesRoute = route.use((request , response)=>{
        response.render('courses' , {title: 'Our Courses'});
        response.end();
});

module.exports = coursesRoute;