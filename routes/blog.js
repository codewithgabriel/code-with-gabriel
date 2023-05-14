let express = require('express');
let route = express.Router()

let blogRouter = route.use((request , response)=>{
    response.render('blog' , {title: "Blog"});
    response.end();
});



module.exports = blogRouter;