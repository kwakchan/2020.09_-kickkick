var http = require('http');
var url = require('url');

var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'111111',
  database:'kickkick'
});
db.connect();

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; 
    var pathname = url.parse(_url, true).pathname;
    console.log(queryData); // query string 값
    console.log(pathname); 

  // [로그인 Login]
  if(pathname === '/login'){
    var login = require('./lib/login');
    response.writeHead(200);
    response.end(login);
  }

  // [로딩 Loading]
  else if(pathname === '/loading'){
    var loading = require('./lib/loading');
    response.writeHead(200);
    response.end(loading);
  }

  // [경기매칭 matching]
  else if(pathname === '/matching'){
    var matching = require('./lib/matching');
    response.writeHead(200);
    response.end(matching);
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

  // [에러]
  else {
  response.writeHead(404);
  response.end('Not found');
  }

});
app.listen(3000, function() {
  console.log('Let`s go to [kick kick]!')
});