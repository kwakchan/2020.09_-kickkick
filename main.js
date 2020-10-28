var http = require('http');
var url = require('url');
var qs = require('querystring');

var matching_template = require('./lib/matching.js');
var matching_make_template = require('./lib/matching_make.js');
var matching_management_template = require('./lib/matching_management.js');

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

  // [---------------------경기매칭 matching---------------------]
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

      //maching 방만들기
      else if(pathname === '/matching/matching_make'){
        var matching_make = matching_make_template.HTML();
        response.writeHead(200);
        response.end(matching_make);
      }

      //maching 방만들기 프로세스
      else if(pathname === '/create_process'){
          var body = '';        
          request.on('data', function(data){
            body += data;
          });
          request.on('end', function(){
            console.log()
            var post = qs.parse(body);
            var title = post.form_title
            var title = post.form_title;
            var date = post.form_date;
            var time = post.form_time;
            var content = post.form_content;
            console.log(post, title, date, time, content);
            
            sql = "INSERT INTO matching (title, date, time, content) VALUES(?,?,?,?);";
            db.query(sql,[title, date, time, content],function(error, result){
                if(error){
                  throw error;
                }
                console.log(result.insertId)
                response.writeHead(302, {Location: `/matching`});
                response.end();
            });
          });    
        
      }
      
      //관리(방수정과 삭제)
      else if(pathname === '/matching/matching_management'){
        db.query(`SELECT * FROM matching where id=?`, [queryData.id] , function(error2, topic){
        if(error2){
          throw error;
        }
        var matching_management = // matching_management_template.HTML();
        `
        <!DOCTYPE html>
        <html>
        <meta charset="utf-8">

        <head>
          <title>경기매칭-관리</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"> 
          <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
          
          <style type="text/css">

            #pop-up{
              width: 320px;
              height: 280px;
              margin: 40% auto;

              font-size:15px;
              font-family: 'Nanum Gothic';
              color: white;
              background-color: lightgray;
              line-height: 50px;
              border: solid 2px grey;
              border-radius: 40px;
              
              
            }

            #table{
              text-align: center;
              margin: auto;
              align-items: center;
            }
            
            #submit{
              width: 100px;
              background-color: gray;
              text-align: center;
              margin: auto;
              align-items: center;
            }
          </style>
        </head>

        <body>

          <div id="pop-up">

            <table id="table"> 
              <form action="#.php">
                <tr>
                  <td colspan="2"> 제목</td>
                  <td colspan="2"> <input type="text" class=form value="${topic[0].title}"> </td>
                </tr>

                <tr>
                  <td colspan="2">날짜</td>
                  <td colspan="2"> <input type="date" class=form value="${topic[0].date}"> </td>
                </tr>

                <tr>
                  <td colspan="2">시간</td>
                  <td colspan="2"> <input type="time" class=form value="${topic[0].time}"> </td>
                </tr>

                <tr>
                  <td colspan="2">내용</td>
                  <td colspan="2"> <input type="text" class=form value="${topic[0].content}"> </td>
                </tr>

                <tr>
                  <td colspan="4"> 
                    <div id="submit"> <input type="submit" value="연락하기"> </div> 
                  </td>
                </tr> 
              </form> 
            </table>
          </div>
        </body>
        </html>
        `;
        
        response.writeHead(200);
        response.end(matching_management);
        });
      }  
     
  //[---------------------용병 hero---------------------]
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
  //[---------------------팀 team---------------------]
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
  
  //[---------------------채팅 chat---------------------] 
   else if(pathname === '/chat'){
    var chat = require('./lib/chat');
    response.writeHead(200);
    response.end(chat);
  }  

  //[---------------------유저 user---------------------] 
  else if(pathname === '/user'){
    var user = require('./lib/user');
    response.writeHead(200);
    response.end(user);
  }  

  //[---------------------에러 error---------------------]
  else {
  response.writeHead(404);
  response.end('Not found');
  }

});
app.listen(3000, function() {
  console.log('Let`s go to [kick kick]!')
});