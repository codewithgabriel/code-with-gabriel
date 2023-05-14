let express = require('express');
let route = express.Router()
let client = require('./db');
let secret = require('./secret');



let signupRouter = route.use((request , response)=>{
    let firstname = request.body.firstname;
    let lastname = request.body.lastname;
    let email = request.body.email;
    let username = request.body.username;
    let pass = secret(request.body.pass);
    let rpass = secret(request.body.rpass);
    let referrer = request.body.referrer;
    let profile_pic = null;





    if ( (/^[a-zA-Z ]*$/.test(firstname) && firstname !== '' ) && (lastname !== "" && /^[a-zA-Z ]*$/.test(lastname)) && (email !== "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  && (username !== "" && /^[0-9a-zA-Z ]*$/.test(username)) && (pass !== ""  && pass.length >= 8)  && (rpass !== "" && pass === rpass && rpass.length >= 8) ) {
      console.log("all data satisfied!");
        let data=  {firstname: firstname , lastname: lastname, email: email , username: username , pass: pass , referrer: referrer, profile_pic: profile_pic};
        client.connect(err => {
          if (err) console.log(err);
          const users_ = client.db("CWG").collection("users_");
          users_.findOne({email: email} , function(err , result){
                try {
                  if (result) {
                    console.log("user with " , result.email , ' already exsit!');
                    response.json({errStatus: -1 , errMessage: "user already exist" ,  data: data});

                    response.end();
                  }else {
                    users_.insertOne(data, (err)=>{
                      if (err) throw err;
                      response.json({errStatus: 0 ,errMessage: "signup successful" ,  data: data});

                      response.end();
                    });
                  }
                }catch(e){
                    console.log(e);
                }

          });
        });



    }else{
      response.json({errStatus: -1 , errMessage: 'data not satisfied' , data: request.body});
      response.end();
    }







});


client.close();


module.exports = signupRouter;
