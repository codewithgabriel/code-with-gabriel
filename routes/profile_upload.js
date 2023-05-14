let express = require('express');
let route = express.Router();
let client = require('./db');


module.exports = route.use((request , response)=>{
  if (request.files !== undefined ) {
    for ( i in request.files){

      let img = request.files[i];
        if( !img.data) cerr = true ;
        let path = 'public/post/img/'+img.name;
        img.mv(path, (err)=>{
          if(err){ throw err};
          client.connect((err)=>{
            if (err) throw err;
            console.log('uploaded');
            let users_ = client.db("CWG").collection("users_");
            users_.updateOne({email: i} , {$set: {profile_pic: img.name} } , (err)=>{
              if (err) throw err;
              console.log('profile set!');
              response.send({errStatus: 0 });
              response.end();

            })

          });

        });
      }

  }


});
