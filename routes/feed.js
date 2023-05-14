let express = require('express');
let route = express.Router();


const feedRouter = route.use((request , response)=>{
            response.render('feed', {title: 'Feed'});
            response.end();
});



module.exports = feedRouter;