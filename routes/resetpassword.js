let express = require('express');
let route = express.Router()

let resetpasswordRouter = route.use((request , response)=>{
    response.render('resetpassword' , {title: "Passsword Reset"});
    response.end();
});



module.exports = resetpasswordRouter;