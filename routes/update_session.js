let express = require('express');
let route = express.Router()
let client = require('./db');
let secret = require('./secret');
let fs = require('fs');

let signinRouter = route.use((request , response)=>{
    let email = request.body.email;
    let username = request.username;





      console.log("all data satisfied!");
        let data=  {email: email};
        client.connect(err => {
          if (err) console.log(err);
          const users_ = client.db("CWG").collection("users_");
          users_.findOne({email: email} , function(err , result){
                  if (err) throw err;
                  if (result) {

                      console.log("user with " , result.email , 'login!');
                      let buff = fs.readFileSync("public/post/img/"+result.profile_pic);
                      console.log(buff);
                      let profile_buff  = (result.profile_pic !== null )  ? buff : result.profile_pic;
                      response.json({errStatus: 0 , errMessage: "login successful!" ,  user_session:{userid: result._id , email: result.email , username: result.username , profile_pic: profile_buff}});
                      // client.close();
                      response.end();


                  }else {
                    response.json({errStatus: -1 , errMessage: "invalid credentials." ,  data: data});
                    // client.close();
                    response.end();
                  }


          });
        });

        // response.end();
});


client.close();



module.exports = signinRouter;
