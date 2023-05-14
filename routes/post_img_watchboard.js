let express = require('express');
let route = express.Router();


module.exports = route.use((request , response)=>{
  console.log(request.files);
  if (request.files !== undefined ) {
    for (let i in request.files){
      let img = request.files[i];
        if( !img.data) cerr = true ;
        let path = 'public/post/img/'+img.size +img.name;
        img.mv(path, (err)=>{
          if(err){ throw err};
          console.log('uploaded');
          response.send({errStatus: 0 });
          response.end();
        });
    }
  }


});
