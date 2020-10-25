var http = require('http');
var url = require('url');
var ejs = require('ejs');

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
    
    var sql = 'SELECT * FROM matching';
    db.query(sql, function (err, rows, fields) { // rows: table 가로행, fields: table 세로열
      if(err){
        console.log(err);
      } 
      else {
        
        var matching = `
          <!DOCTYPE html>
          <html>
          <meta charset="utf-8">
          <head>
            <title>경기매칭</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"> 
            <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

            <!--  <meta http-equiv="refresh" content="5"> 5초마다 새로고침 -->

            <!--header와 footer를 불러오는 script문 -->
            <script type="text/javascript" src="includeHtml.js"></script>
            
            <script type="text/javascript">
              function headerCompleted() {
                
              }
              function footerCompleted() {
                
              }
            </script>
            <!--header와 footer를 불러오는 script문 /-->

            <style type="text/css">
              
            
              #header{
                background: white;
                font-family: HY동녘B;

                display: flex;
                justify-content: center;
              }

              #footer{
                background: white;

                display: flex;
                justify-content: center;
              }

              #content{
                width: 100%;
                height: 100%;

                background: white;
                color: black;
                font-size: 0.625em;

                display: flex;
                justify-content: center;
                    
              }


              #matching-logo{
                width: 6rem;
                height: 6rem;
                margin: 0.625em;
                border: 0.625em;
              }

              #btn2 {
                width: 6.00em;
                height: 3.50em;

                background: white;
                color: gray;
                font-size:1.250em;
                line-height: 3.125em;

                border: solid 2px grey;
                border-radius: 30px;

                display: flex;
                justify-content: center;
              }

              #title{
                font-size: 1.5rem;
                
                font-family: 'HY동녘B';
                text-align: left;
                font-weight: bold;

                margin: 20px;
                border: 10px;
              }

              #matching-search{
                width: 3.750em;
                height: 1.875em;
                font-size: 1.250em;
                font-family: '돋움';
                color: white;
                text-align: center;
                background: gray;
                border: solid 2px grey;
                border-radius: 30px;
              }

            </style>

          </head>

          <body>
          <div data-role="page" id="bar">	
            <!--header-->
            <div data-role="header" data-position="fixed" id="header">
              <h1>킥킥</h1>
            </div>
                  
              <!--content-->
              <div data-role="content" id="content"> 
                
                <!--content 방만들기-->
                <div style="width: 100%; height: 100%;">   
                <table class="matching-create" style="width: 100%; height: 20%; text-align: center;">
              <tr>
                  <th class="tg-c3ow" colspan="2" rowspan="2"> <img src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%8B%B8%EC%BB%A4%ED%82%A5.png" id="matching-logo"> </th>
                  <th class="tg-c3ow" colspan="6" id="title">  <br>경기매칭</th>
              </tr>
                <tr>
                  <td class="tg-c3ow" colspan="3"> <button type="button" id="btn2"  onclick="location.href='/matching/matching_make'">만들기</button> </td>
                  <td class="tg-c3ow" colspan="3"> <button type="button" id="btn2"  onclick="location.href='/matching/matching_management'">관리</button> </td>
                </tr>
              </table>

                <!--content 방 리스트-->
              <br>
              <table class="matching-list" style="width: 100%; height: 100%; text-align: center;">
                <thead>
                  <tr>
                    <th class="tg-c3ow" align="center">
                      <form action="#.php" style="width: 8em">
                        <input type="date">
                      </form>	
                    </th>

                    <th class="tg-c3ow" align="center">
                      <form action="#.php" style="width: 8em">
                        <input type="time">
                      </form>	
                    </th>

                    <th class="tg-c3ow" colspan="4" align="center"> <div id="matching-search">검색</div> </th>
                    
                  </tr>
                </thead>

                <tbody style="width: 100%; height: 100%;"> 
                
                while(int i=0 < topics.length){
                  <tr>
                    <td class="tg-0lax">${rows[i].date}</td>
                    <td class="tg-0lax">${rows[i].time}</td>
                    <td class="tg-0lax" colspan="4">${rows[i].content}</td>
                  </tr>
                }  
                  <tr>
                    <td class="tg-0lax">${rows[1].date}</td>
                    <td class="tg-0lax">${rows[1].time}</td>
                    <td class="tg-0lax" colspan="4">${rows[1].content}</td>
                  </tr>
                  <tr>
                    <td class="tg-0lax">10/3</td>
                    <td class="tg-0lax">오전</td>
                    <td class="tg-0lax" colspan="4">송정 현욱하우스/ 현욱스/ 5대5</td>
                  </tr>
                  <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" colspan="4"></td>
                  </tr>
                  <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" colspan="4"></td>
                  </tr>
                  <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" colspan="4"></td>
                  </tr>
                  <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" colspan="4"></td>
                  </tr>
                  <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" colspan="4"></td>
                  </tr>
                  <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" colspan="4"></td>
                  </tr>
                  <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" colspan="4"></td>
                  </tr>
                  <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" colspan="4"></td>
                  </tr>
                  <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" colspan="4"></td>
                  </tr>

                
                </tbody>
              </table>
              </div>
            </div>	
              
            <!--footer-->
              <div data-role="footer" data-position="fixed" id="footer">
                <table>
                  <tr>
                    <td> <a href="/matching">
                        <img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EB%A7%A4%EC%B9%AD.png" height="65px" width="65px"> 
                      </a>
                    </td>

                    <td> <a href="/hero"> 
                        <img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%9A%A9%EB%B3%91.jpg" height="65px" width="65px"> 
                      </a>
                    </td>

                    <td> <a  href="/team">
                        <img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%ED%8C%80.png" height="65px" width="65px">
                      </a>
                    </td>

                    <td> <a href="/chat">
                      <img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%B1%84%ED%8C%85.png
                      " height="65px" width="65px"> 
                      </a>
                    </td>

                    <td> <a href="/user"> 
                        <img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%9C%A0%EC%A0%80.png" height="65px" width="65px"> 
                      </a>
                    </td>
                  </tr>	
                </table>
            </div>		

            
          </div>
            <script scr>includeHtml();</script>  <!-- includeHtml.js를 호출 -->
          </body>

          </html>
          `;
      }
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