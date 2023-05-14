require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app  = express();
var bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
//routes
const indexRoute = require('./routes/index');
const coursesRoute = require('./routes/courses');
const tutorialRoute = require('./routes/tutorial');
const blogRouter =  require('./routes/blog');
const signupRouter =  require('./routes/signup');
const signinRouter =  require('./routes/signin');
const errRoute = require('./routes/err');
const contactRouter = require('./routes/contact');
const resetpasswordRouter = require('./routes/resetpassword');
const feedRouter = require('./routes/feed');
const subscribeRouter = require('./routes/subscribe');
const post_watchboardRouter = require('./routes/post_watchboard');
const post_img_watchboardRouter = require('./routes/post_img_watchboard');

let get_watchboardRouter = require('./routes/get_watchboard');
const like_postRouter = require('./routes/like_post');
const dislike_postRouter = require('./routes/dislike_route');
const addCommentRouter = require('./routes/addcomment_route');
const getcommentRouter = require('./routes/getcomment_route');
const profile_uploadRouter = require('./routes/profile_upload');
const update_sessionRouter = require('./routes/update_session');



//set engine parameter
app.set("port" , process.env.PORT || 8080 );
app.set("views" , path.resolve (__dirname , "views"));
app.set("view engine" , 'ejs');


//use the middleware
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'build')));

app.use(express.json());
// app.use(bodyParser.json());


app.use(fileupload());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({extended: true}));

app.use(logger("combined"));


//use routes
app.get('/' , indexRoute);
app.get('/courses' , coursesRoute);
app.get('/tutorial' , tutorialRoute);
app.get('/blog' , blogRouter);
app.get('/contact' , contactRouter);
app.get('/resetpassword' , resetpasswordRouter);
app.get('/subscribe' , subscribeRouter);


app.get('/signup' , signupRouter);
app.get('/signin' , signinRouter);

app.post('/signup' , signupRouter);
app.post('/signin' , signinRouter);
app.post('/post_watchboard' , post_watchboardRouter);
app.post("/post_img_watchboard" ,  post_img_watchboardRouter );
app.get('/get_watchboard' , get_watchboardRouter);
app.post('/like_post' , like_postRouter);
app.post('/dislike_post' , dislike_postRouter);
app.post('/addcomment' , addCommentRouter);
app.post('/getcomment' , getcommentRouter);
app.post('/profile_upload' , profile_uploadRouter);
app.post('/update_session' , update_sessionRouter);
app.get('/feed' , feedRouter);
var url = require('url');
let fs = require('fs');


app.get("/img" , (request , response)=>{
  var q = url.parse(request.url, true).query;
  fpath = "public/"+q.src;
  let data = fs.readFileSync(fpath);
  response.send({buff: data})
  response.end();
});


app.use(errRoute);


//listen on unused port
app.listen(process.env.PORT || 8080 , (err)=> {
    if (err) console.error("error listening to web server..");
    console.info(`=> web server running on port ${8080}`);
})
