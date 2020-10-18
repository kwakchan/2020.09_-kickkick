var http = require('http');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; 
    var pathname = url.parse(_url, true).pathname;
    console.log(queryData); // query string 값
    console.log(pathname); 

    // [경기매칭 matching]
    if(pathname === '/matching'){
      var matching = require('./lib/matching');
      response.writeHead(200);
      response.end(matching);

      /* 방만들기
      if(queryData.id === 'matching-make'){
      var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 </title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="matching">HTML</a></li>
          <li><a href="hero">CSS</a></li>
          <li><a href="team">JavaScript</a></li>
        </ul>
        
        <p> matching1 </p>
      </body>
      </html>
      `;
      response.writeHead(200);
      response.end(template);
      }
      // 관리
      else if(queryData.id === 'matching-management') {  
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 </title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ul>
            <li><a href="matching">HTML</a></li>
            <li><a href="hero">CSS</a></li>
            <li><a href="team">JavaScript</a></li>
          </ul>
          
          <p> matching2 </p>
        </body>
        </html>
        `;
      response.writeHead(200);
      response.end(template);
      
    }
     */ 

  // [용병 hero]
  } else if(pathname === '/hero'){
    var hero = require('./lib/hero');
    response.writeHead(200);
    response.end(hero);
  }
  // [팀 team] 
   else if(pathname === '/team'){
    var team = require('./lib/team');
    response.writeHead(200);
    response.end(team);
    }
  
  // [채팅 chat] 
   else if(pathname === '/chat'){
    var chat = require('./lib/chat');
    response.writeHead(200);
    response.end(chat);
  }  

  // [유저 user] 
    else if(pathname === '/user'){
      var chat = require('./lib/user');
      response.writeHead(200);
      response.end(user);
    }  

  // [에러]
  else {
  response.writeHead(404);
  response.end('Not found');
  }  

});
app.listen(3000);