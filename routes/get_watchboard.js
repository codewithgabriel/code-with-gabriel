const express = require('express')
const route = express.Router();
let client = require('./db');


module.exports = route.use((request , response)=>{
      client.connect((err)=>{
        let watch_board = client.db("CWG").collection("watch_board");
        watch_board.find({}).sort({_id: -1}).toArray((err, item)=>{
          if (err) throw err;
          console.log(item);
          response.json(item);
          response.end();
        })

      });

});


client.close();
