const express = require('express');
const route = express.Router();
const client = require('./db');

module.exports = route.use((request , response)=>{
    let key = request.body.key;
    console.log(key);
    response.send(request.body);
    client.connect((err)=>{
      let watch_board = client.db("CWG").collection("watch_board");
      watch_board.findOne({key: key} , function(err , result){
        if (err) throw err;

        if (result.key === key) {
          console.log(result.postFooter);
          let query = {key: result.key};
          let oldvalue = result.postFooter;
          let newvalue = {heart: oldvalue.heart+1 , heartbreak: oldvalue.heartbreak , comments: oldvalue.comments}
          watch_board.updateOne(query, {$set:{ postFooter: newvalue}} , (err , result)=> {
            if (err) throw err;
            console.log('document updated!');
          } );
        }

      });
    });
    response.end();
});
