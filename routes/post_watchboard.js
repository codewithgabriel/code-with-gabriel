const express = require('express')
const route = express.Router();
let client = require('./db');
let formidable = require('formidable');
let fs = require('fs');
let path = require('path');

//
// function dorename(dir , oldname , newname){
//   fs.rename(dir+oldname , ""+path.resolve(dir+newname) , (err)=>{
//     if (err) throw err;
//     console.log('renamed');
//   });
// }
// function saveFile(name , buf) {
//   let dir = 'public/img/';
//   let oldname = 'person.png';
//   let newname = name;
//
//   let fd = fs.openSync(dir+oldname , 'w');
//   fs.write(fd,  buf, 0 ,  buf.length, null  , (err )=>{
//     if (err) throw err;
//     console.log("written");
//     dorename(dir , oldname , newname);
//   });
//
// }

module.exports = route.use((request , response)=>{
    if (request.body !== {} ){
      let data = request.body;
      client.connect((err)=>{
        if (err) throw err;
        let watch_board = client.db("CWG").collection("watch_board");
        watch_board.insertMany(data , (err)=>{
          if (err) throw err;
          response.send({errStatus: 0, data:data});
          console.log("data inserted");
          response.end();

        })

      });
    }

});


client.close();
