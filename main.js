var http = require('http');
var url = require('url');
var ejs = require('ejs');
var matching_template = require('./lib/matching.js');

var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',//'202.30.32.218',
  port: '3305',//'3306',
  user:'root',
  database: 'kickkick'
});
db.connect();

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; 
    var pathname = url.parse(_url, true).pathname;
    console.log(queryData); // query string 값
    console.log(pathname); 

  // [로딩 Loading]
  if(pathname === '/'){
    var loading = require('./lib/loading');
    response.writeHead(200);
    response.end(loading);
  }

  // [로그인 Login]
  else if(pathname === '/login'){
    var login = require('./lib/login');
    response.writeHead(200);
    response.end(login);
  }

  // [경기매칭 matching]
  else if(pathname === '/matching'){
    db.query(`SELECT * FROM matching`, function(error,topics){
      if(error){
        throw error;
      }
      var list = matching_template.list(topics);
      var matching = matching_template.HTML(list);
    response.writeHead(200);
    response.end(matching);
    });
  }  

      //방만들기
      else if(pathname === '/matching/matching_make'){
        var matching_make = require('./lib/matching_make')
        response.writeHead(200);
        response.end(matching_make);
      }
      //관리(방수정과 삭제)
      else if(pathname === '/matching/matching_management'){
        var matching_management = require('./lib/matching_management')
        response.writeHead(200);
        response.end(matching_management);
      }
     
  // [용병 hero]
  else if(pathname === '/hero'){
    var hero = require('./lib/hero');
    response.writeHead(200);
    response.end(hero);
  }
      //방만들기
      else if(pathname === '/hero/hero_make'){
        var hero_make = require('./lib/hero_make')
        response.writeHead(200);
        response.end(hero_make);
      }
      //관리(방수정과 삭제)
      else if(pathname === '/hero/hero_management'){
        var hero_management = require('./lib/hero_management');
        response.writeHead(200);
        response.end(hero_management);
      }
  // [팀 team] 
  else if(pathname === '/team'){
    var team = require('./lib/team');
    response.writeHead(200);
    response.end(team);
  }  
      else if(pathname === '/team/team_management'){
        var team_management = require('./lib/team_management');
        response.writeHead(200);
        response.end(team_management);
      }
      
      else if(pathname === '/team/team_management_profile'){
        var team_management_profile = require('./lib/team_management_profile');
        response.writeHead(200);
        response.end(team_management_profile);
      }  
  
  // [채팅 chat] 
   else if(pathname === '/chat'){
    var chat = require('./lib/chat');
    response.writeHead(200);
    response.end(chat);
  }  

  // [유저 user] 
  else if(pathname === '/user'){
    var user = require('./lib/user');
    response.writeHead(200);
    response.end(user);
  }  

  // db test
  else if(pathname === '/test'){
    
    var sql = 'SELECT * FROM matching';
    db.query(sql, function (err, rows, fields) { // rows: table 가로행, fields: table 세로열
      if(err){
        console.log(err);
      } 
      else {
        for(var i = 0; i < rows.length; i++){
          console.log(rows[i].title + " : " + rows[i].id + rows[i].title + rows[i].date + rows[i].time + rows[i].content);
        }
        var html = `
          <!Doctype html>
          <html>
          <meta set = "utf-8">
            <head>
            </head>
            <body>
              <h1> database </h1>
              ${rows[0].id} / ${rows[0].title} / ${rows[0].date} / ${rows[0].title}
            <body>
          </html>
        `
      }
      response.end(html);
    });

  }

  // [에러]
  else {
  response.writeHead(404);
  response.end('Not found');
  }

});
app.listen(3000, function() {
  console.log('Let`s go to [kick kick]!')
});