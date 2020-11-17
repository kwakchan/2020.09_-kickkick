var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session)

var app = express()
  
app.use(session({
  secret: 'asadlfkj!@#!@#dfgasdg',	//꼭필요함 다른사람한테 노출되면안됨
  resave: false,	//session데이터가 바뀌기전까지 session저장소값을 저장하지않는다. true면 바꼇건바뀌지않던 계속저장함
  saveUninitialized: true,	//session필요하기전까진 session구동하지않음 
  store:new FileStore()  //메모리휘발성을 파일로만들어 비휘발성으로만듦
}))
  
app.get('/', function (req, res, next) {
  console.log(req.session);
    if(req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num =  req.session.num + 1;
    }
    res.send(`Views : ${req.session.num}`);
})
 
app.listen(3000, function(){
    console.log('3000!');
});