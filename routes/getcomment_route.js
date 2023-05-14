const express = require('express');
const route = express.Router();
const client = require('./db');


module.exports= route.use((request , response)=>{
  client.connect((err)=>{
    let watch_board = client.db("CWG").collection("watch_board");
    watch_board.findOne({key: request.body.key} , (err, item)=>{
      if (err) throw err;
      console.log(item.postFooter.comments);
      response.json(item.postFooter.comments);
      response.end();
    });


});

});
