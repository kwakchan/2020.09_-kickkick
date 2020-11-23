var url = require('url');
var qs = require('querystring');
var fs = require('fs')
var express = require('express');
var app = express();
var router = express.Router()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var header_template = require('./components/header.js')
var footer_template = require('./components/footer.js')
var login_template = require('./lib/login.js')
var login_register_template = require('./lib/login_register.js')
var matching_template = require('./lib/matching.js');
var matching_make_template = require('./lib/matching_make.js');
var matching_management_template = require('./lib/matching_management.js');
var matching_management_update_template = require('./lib/matching_management_update.js');
var team_template = require('./lib/team.js');
var hero_template = require('./lib/hero.js');
var hero_make_template = require('./lib/hero_make.js');
var hero_management_template = require('./lib/hero_management.js');
var hero_management_update_template = require('./lib/hero_management_update.js');
var user_template = require('./lib/user.js');
var user_update_template = require('./lib/user_update.js');

var mysql = require('mysql');
var db = mysql.createConnection({
  connectionLimit: 10,
  host: 'localhost',//'202.30.32.218',
  port: '3305',//'3306',
  user: 'root',
  database: 'kickkick',
  dateStrings: 'date',
});
db.connect();

var multer = require('multer') // 파일 올리기 모듈
var _storage = multer.diskStorage({
    destination: function (req, file, cb) { // 저장될 경로
      cb(null, 'uploads/');   // uploads 폴더로
    },
    filename: function (req, file, cb) { // 파일명
      cb(null, file.originalname); // 파일명을 타임스탬프로
    }
})
var upload = multer({ storage: _storage })

app.use('/upload', express.static('uploads'));
app.get('/upload', function(req, res){
  res.render('upload');
});
app.post('/upload', upload.single('userfile'), function(req, res){
  res.send('Uploaded! : '+req.file.filename);
});

// Loading 로딩----------------------------------------------
app.get('/', function (request, response) {
  var login = login_template.HTML();
  response.send(login);
});

// Login 로그인
app.get('/login', function (request, response) {
  var login = login_template.HTML();
  response.send(login);
});

// Login 로그인 process
app.post('/login/login_process', function (request, response) {
  var post = request.body;
  var email = post.email; 
  var password = post.password; 

  db.query('SELECT * FROM user where email=? and password=?', [email, password], function (error, topic) {
    if (error) {
      throw error;
    }
    response.redirect(`/user?email=${email}`);
  });
});

// Login 회원가입
app.get('/login/login_register', function (request, response) {
  dup='';
  var register = login_register_template.HTML(dup);
  response.send(register);
});

// Login 회원가입 프로세스
app.post('/login/register_process', function (request, response) {
  var post = request.body;
  var email = post.email;
  var password = post.password;
  var name = post.name;
  sql = "INSERT INTO user (email, password, name) VALUES(?,?,?);";

  db.query("SELECT *FROM user WHERE email=?", [email], function (err, data) {
    console.log(data);
    if (data.length == 0) {
      db.query(sql, [email, password, name], function (error, topics) {
        if (error) {
          throw error;
        }
        response.redirect('/login');
      });
    } else {
      dup='아이디 중복입니다';
      var register = login_register_template.HTML(dup);
      response.send(register);
      console.log('id 중복')
      
    }
  });
    {/*
  //암호화 복호화 set
  var key = 'myeky';
  var cipher = crypto.createCipher('aes192', key);
  var decipher = crypto.createDecipher('aes192', key);
  //암호화(utf8을 base64로 암호화 시킴)
  cipher.update(pw, 'utf8', 'base64');
  var cipheredOutput = cipher.final('base64');
  //복호화(base64를 utf8로 복호화 시킴)
  decipher.update(cipheredOutput, 'base64', 'utf8');
  var decipheredOutput = decipher.final('utf8');
  console.log('원문 :' + pw); //원본
  console.log('암호화 :' + cipheredOutput); // 암호화
  console.log('복호화 :' + decipheredOutput); // 복호화
  */}
});  

// matching 리스트--------------------------------------------
app.get('/matching', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  db.query(`SELECT * FROM matching`, function (error, topics) {
    if (error) {
      throw error;
    }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email);
    var list = matching_template.list(topics);
    var matching = matching_template.HTML(header, footer, list, queryData_email);
    response.send(matching);
  });
});

// matching 날짜 시간 찾기
app.post('/matching_search', function (request, response){
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var post = request.body;
  var date = post.date;
  var time = post.time;
  
  db.query(`select * from hero where date=? or time=?`, [date, time], function(error, find){ 
    if(error){
      throw error;
    }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email); 
    var list = hero_template.list(find);
    var matching = matching_template.HTML(header, footer, list, queryData_email);
    response.send(matching);
  });
});

//maching 방만들기
app.get('/matching/matching_make', function (request, response) {
  var queryData = url.parse(request.url, true).query; 
  var queryData_email = queryData.email;
  db.query(`SELECT team FROM user where email=?`, [queryData_email], function(error2,users){
    if(error2){
      throw error2;
    }
  var matching_make = matching_make_template.HTML(users, queryData_email);
  response.send(matching_make);
  });
});

//maching 방만들기 프로세스
app.post('/matching/create_process', function (request, response) {
  var post = request.body;
  var title = post.form_title;
  var team = post.form_team;
  var date = post.form_date;
  var time = post.form_time;
  var contents = post.form_contents;

  sql = "INSERT INTO matching (title, team, date, time, contents) VALUES(?,?,?,?,?);";
  db.query(sql, [title, team, date, time, contents], function (error, result) {
    if (error) {
      throw error;
    }
    response.redirect(`/matching`);
  });
});

//matching 관리(수정, 삭제)
app.get('/matching/matching_management', function (request, response) {
  var queryData = url.parse(request.url, true).query;

  db.query(`SELECT * FROM matching where id=?`, [queryData.id], function (error2, topic) {
    var title = topic[0].title;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var queryData_id = queryData.id;
    var team = topic[0].team;

    if (error2) {
      throw error;
    }
    var matching_management = matching_management_template.HTML(title, team, date, time, contents, queryData_id);
    response.send(matching_management);
  });
});

//matching 관리 방수정
app.get('/matching/matching_management/update', function (request, response) {
  var queryData = url.parse(request.url, true).query;

  db.query(`SELECT * FROM matching where id=?`, [queryData.id], function (error2, topic) {
    var title = topic[0].title;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var team = topic[0].team;
    var queryData_id = queryData.id;

    if (error2) {
      throw error;
    }
    var matching_management_update = matching_management_update_template.HTML(title, team, date, time, contents, queryData_id);
    response.writeHead(200);
    response.end(matching_management_update);
  });
});

//matching 관리 방수정 프로세스
app.post('/matching/matching_management/update_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;

  var post = request.body;
  var title = post.update_title;
  var date = post.update_date;
  var time = post.update_time;
  var team = post.update_team;
  var contents = post.update_contents;
  var queryData_id = queryData.id;

  db.query('UPDATE matching SET title=?, team=?, date=?, time=?, contents=? WHERE id=?', [title, team, date, time, contents, queryData_id], function (error, result) {
    response.writeHead(302, { Location: `/matching` });
    response.end();
  })

});

//matching 관리 방삭제 프로세스
app.get('/matching/matching_management/delete_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;

  var post = request.body;
  var queryData_id = queryData.id;
  db.query('DELETE FROM matching WHERE id = ?', [queryData_id], function (error, result) {
    if (error) {
      throw error;
    }
    response.writeHead(302, { Location: `/matching` });
    response.end();
  });
});

//hero 리스트-------------------------------------------
app.get('/hero', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  db.query(`SELECT * FROM hero`, function (error, topics) {
    if (error) {
      throw error;
    }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email);
    var list = hero_template.list(topics);
    // var date = hero_template.date(topics);
    // console.log(date);
    var hero = hero_template.HTML(header, footer, list, queryData_email);
    response.send(hero);
  });
});

// hero 날짜 시간 찾기
app.post('/hero_search', function (request, response){
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var post = request.body;
  var date = post.date;
  var time = post.time;
  
  db.query(`select * from hero where date=? or time=?`, [date, time], function(error, find){ 
    if(error){
      throw error;
    }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email); 
    var list = hero_template.list(find);
    var hero = hero_template.HTML(header, footer, list, queryData_email);
    response.send(hero);
  });
});

//hero 방만들기
app.get('/hero/hero_make', function (request, response) {
  var queryData = url.parse(request.url, true).query; 
  var queryData_email = queryData.email;
  
  db.query(`SELECT name FROM user where email=?`, [queryData_email], function(error2,users){
    if(error2){
      throw error2;
    }
    var hero_make = hero_make_template.HTML(users, queryData_email);
    response.send(hero_make);
  });
});

//hero 방만들기 프로세스
app.post('/hero/create_process', function (request, response) {
  var queryData = url.parse(request.url, true).query; 
  var queryData_email = queryData.email;
  var post = request.body;
  var name = post.form_name;
  var date = post.form_date;
  var time = post.form_time;
  var contents = post.form_contents;
  var title = post.form_title;

  sql = "INSERT INTO hero (title, name, date, time, contents) VALUES(?,?,?,?,?);";
  db.query(sql, [title, name, date, time, contents], function (error, result) {
    if (error) {
      throw error;
    }
    response.writeHead(302, { Location: `/hero` });
    response.end();
  });
});

//hero 관리(수정, 삭제)
app.get("/hero/hero_management", function (request, response) {
  var queryData = url.parse(request.url, true).query;

  db.query(`SELECT * FROM hero where id=?`, [queryData.id], function (error2, topic) {
    var title = topic[0].title;
    var name = topic[0].name;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var queryData_id = queryData.id;
    
    if (error2) {
      throw error;
    }
    var hero_management = hero_management_template.HTML(title, name, date, time, contents, queryData_id);
    response.send(hero_management);
  });
});

//hero 관리 방수정
app.get("/hero/hero_management/update", function (request, response) {
  var queryData = url.parse(request.url, true).query;

  db.query(`SELECT * FROM hero where id=?`, [queryData.id], function (error2, topic) {
    var title = topic[0].title;
    var name = topic[0].name;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var queryData_id = queryData.id;

    if (error2) {
      throw error;
    }
    var hero_management_update = hero_management_update_template.HTML(title, name, date, time, contents, queryData_id);
    response.send(hero_management_update);
  });
});

//hero 관리 방수정 프로세스
app.post('/hero/hero_management/update_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;

  var post = request.body;
  var title = post.update_title;
  var name = post.update_name;
  var date = post.update_date;
  var time = post.update_time;
  var contents = post.update_contents;
  var queryData_id = queryData.id;

  db.query('UPDATE hero SET title=?, name=?, date=?, time=?, contents=? WHERE id=?', [title, name, date, time, contents, queryData_id], function (error, result) {
    response.writeHead(302, { Location: `/hero` });
    response.end();
  })
});

//hero 관리 방삭제 프로세스
app.get('/hero/hero_management/delete_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;

  var post = request.body;
  var queryData_id = queryData.id;
  db.query('DELETE FROM hero WHERE id = ?', [queryData_id], function (error, result) {
    if (error) {
      throw error;
    }
    response.writeHead(302, { Location: `/hero` });
    response.end();
  });
});

//team 팀 -------------------------------------
app.get('/team', function (request, response) {
  var queryData = url.parse(request.url, true).query; 
  var queryData_email = queryData.email;

  db.query(`SELECT * FROM user where email=?`, [queryData_email], function(error, users){
    if(error){
      throw error
    }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email);
    var team = team_template.HTML(header, footer, queryData_email, users);
    response.send(team);
  });
});

//team 관리
app.get('/team/team_management', function (request, response) {
  var team_management = require('./lib/team_management');
  response.send(team_management);
});

//team 프로필
app.get('/team/team_management_profile', function (request, response) {
  var team_management_profile = require('./lib/team_management_profile');
  response.send(team_management_profile);
});

//chat 채팅------------------------------------ 
app.get('/chat', function (request, response) {
  var chat = require('./lib/chat');
  response.send(chat);
});

//user 유저------------------------------------
app.get('/user', function(request, response){
  var queryData = url.parse(request.url, true).query; 
  var queryData_email = queryData.email;

  var image_directroy = "./uploads"
  var image_name = "/A.jpg"
  var image = image_directroy+image_name;
  fs.readFile(image_directroy+image_name, 'utf8', function(error1, profile_img){
    if(error1){
      throw error1;
    }
    db.query(`SELECT * FROM user where email=?`, [queryData_email], function(error2,users){
      if(error2){
        throw error2;
      }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email);  
    var user = user_template.HTML(header, footer,users, queryData_email, image);
    response.send(user);
    });  
  });  
});

//user 수정
app.get('/user/update', function(request, response){
  var queryData = url.parse(request.url, true).query; 
  
  db.query(`SELECT * FROM user where email=?`, [queryData.email],function(error2, users){
    var name = users[0].name;
    var age = users[0].age;
    var team = users[0].team;
    var position = users[0].position;        
    var height = users[0].height;
    var weight = users[0].weight;
    var queryData_email = queryData.email;       
    
    if(error2){
      throw error;
    }
    var user_update = user_update_template.HTML(queryData_email, name, age, team, position, height, weight);
    response.writeHead(200);
    response.end(user_update); 
  });   
});

//user 수정 프로세스
app.post('/user/update_process', function(request, response){
  var queryData = url.parse(request.url, true).query; 

  var post = request.body;
  var name = post.update_name;
  var age = post.update_age;
  var team = post.update_team;
  var position = post.update_position;        
  var height = post.update_height;
  var weight = post.update_weight;
  var queryData_email = queryData.email;

  db.query('UPDATE user SET name=?, age=?, team=?, position=?, height=?, weight=? WHERE email=?',
  [name, age, team, position, height, weight, queryData_email],
  function(error, result){
    response.writeHead(302, {Location: `/user?email=${queryData_email}`});
    response.end();
  }) 

});

//user 로그아웃 프로세스
app.get('/user/logout_process', function(request, response){
  response.writeHead(302, {Location: `/login`});
  response.end();
});

app.listen(3000, function () {
  console.log('Let`s go Kick Kick')
});