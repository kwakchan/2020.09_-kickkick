var url = require('url');
var qs = require('querystring');
var fs = require('fs')
var express = require('express');
var app = express();
var router = express.Router()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var login_template = require('./lib/login.js')
var matching_template = require('./lib/matching.js');
var matching_make_template = require('./lib/matching_make.js');
var matching_management_template = require('./lib/matching_management.js');
var matching_management_update_template = require('./lib/matching_management_update.js');
var hero_template = require('./lib/hero.js');
var hero_make_template = require('./lib/hero_make.js');
var hero_management_template = require('./lib/hero_management.js');
var hero_management_update_template = require('./lib/hero_management_update.js');
var user_template = require('./lib/user.js');
var user_update_template = require('./lib/user_update.js');

var multer = require('multer') // 파일 올리기 모듈

//[파일 저장위치와 파일이름 설정]
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //파일이 이미지 파일이면
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/png") {
      console.log("이미지 파일이네요")
      cb(null, 'uploads/images')
      //텍스트 파일이면
    } else if (file.mimetype == "application/pdf" || file.mimetype == "application/txt" || file.mimetype == "application/octet-stream") {
      console.log("텍스트 파일이네요")
      cb(null, 'uploads/texts')
    }
  },
  filename: function (req, file, cb) {  //파일이름 설정
    cb(null, Date.now() + "-" + file.originalname)
  }
})

// //[파일 업로드 모듈]
// var upload = multer({ dest: "uploads/" }) // uploads 폴더로 파일 이동함 

// //파일 업로드 및 디비에 위치 저장
// app.post('/upload_images', upload.single('img'), function (req, res) { // user.js <name=img>로부터 업로드
//   console.log("post")
//   console.log(req.file)
//   console.log(req.file.path)
//   console.log(upload)
//   console.log(upload.storage.getFilename)

//   //파일 위치를 mysql 서버에 저장
//   db.query('insert into myfile(name) values (?)', [req.file.path], function () {

//     res.redirect('/filepage');
//   });
// });

// //파일 페이지 보여주기
// app.get("/filepage", function (req, res) {
//   console.log("파일 페이지 나와라")

//   //파일 가져올 위치
//   var path = __dirname + '/../' + 'uploads/images/'

//   fs.readFile('file.html', 'utf-8', function (error, data) {
//     var queryString = 'select * from myfile'
//     db.query(queryString, function (error, result) {
//       if (error) {
//         console.log("파일가져올때 에러 발생" + error);
//         return
//       }
//       res.send(ejs.render(data, {
//         data: result
//       }));
//     });
//   })
// })


var mysql = require('mysql');
var db = mysql.createConnection({
  connectionLimit: 10,
  host: 'localhost',//'202.30.32.218',
  port: '3306',//'3306',
  user: 'root',
  database: 'kickkick',
  dateStrings: 'date',
});
db.connect();

// Loading 로딩----------------------------------------------
app.get('/', function (request, response) {
  var loading = require('./lib/loading');
  response.send(loading);
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
  console.log(email);
  console.log(password);

  db.query('SELECT * FROM user where email=? and password=?', [email, password], function (error, topic) {
    if (error) {
      throw error;
    }
    console.log(topic[0].email);
    console.log(topic[0].name);
    response.writeHead(302, { Location: `/user?email=${email}` });
    response.end();
  });
  //     if (err) {
  //       console.log('err :' + err);
  //     } else {
  //       console.log(rows);
  //       if (rows[0] != undefined) {
  //         if (!(password == rows[0].password)) {     // 비밀번호는 bcrypt를 이용한 암호화를 했으
  //           console.log('패스워드가 일치하지 않습니다');  //므로, bcrypt.compareSync 명령어실행
  //         } else {
  //           console.log('로그인 성공');
  //           response.redirect('/matching');
  //         }
  //       } else {
  //         console.log(rows[0]);
  //         console.log('해당 유저가 없습니다');
  //       }
  //     }
  //   })
});

// Login 회원가입
app.get('/login/login_register', function (request, response) {
  var register = require('./lib/login_register');
  response.send(register);
});

// Login 회원가입 프로세스
app.post('/login/register_process', function (request, response) {
  var post = request.body;
  var email = post.email;
  var password = post.password;
  var name = post.name;
  sql = "INSERT INTO user (email, password, name) VALUES(?,?,?);";
  db.query(sql, [email, password, name], function (error, topics) {
    if (error) {
      throw error;
    }
    response.writeHead(302, { Location: `/login` });
    response.end();
  });
});

// matching 리스트--------------------------------------------
app.get('/matching', function (request, response) {
  db.query(`SELECT * FROM matching`, function (error, topics) {
    if (error) {
      throw error;
    }
    var list = matching_template.list(topics);
    var matching = matching_template.HTML(list);
    response.send(matching);
  });
});

//maching 방만들기
app.get('/matching/matching_make', function (request, response) {
  var matching_make = matching_make_template.HTML();
  response.send(matching_make);
});

//maching 방만들기 프로세스
app.post('/matching/create_process', function (request, response) {
  var post = request.body;
  var title = post.form_title;
  var date = post.form_date;
  var time = post.form_time;
  var contents = post.form_contents;

  sql = "INSERT INTO matching (title, date, time, contents) VALUES(?,?,?,?);";
  db.query(sql, [title, date, time, contents], function (error, result) {
    if (error) {
      throw error;
    }
    response.writeHead(302, { Location: `/matching` });
    response.end();
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

    if (error2) {
      throw error;
    }
    var matching_management = matching_management_template.HTML(title, date, time, contents, queryData_id);
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
    var queryData_id = queryData.id;

    if (error2) {
      throw error;
    }
    var matching_management_update = matching_management_update_template.HTML(title, date, time, contents, queryData_id);
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
  var contents = post.update_contents;
  var queryData_id = queryData.id;

  db.query('UPDATE matching SET title=?, date=?, time=?, contents=? WHERE id=?', [title, date, time, contents, queryData_id], function (error, result) {
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
    var list = hero_template.list(topics);
    var hero = hero_template.HTML(list, queryData_email);
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

  sql = "INSERT INTO hero (name, date, time, contents) VALUES(?,?,?,?);";
  db.query(sql, [name, date, time, contents], function (error, result) {
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
    var name = topic[0].name;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var queryData_id = queryData.id;
    

    if (error2) {
      throw error;
    }
    var hero_management = hero_management_template.HTML(name, date, time, contents, queryData_id);
    response.send(hero_management);
  });
});

//hero 관리 방수정
app.get("/hero/hero_management/update", function (request, response) {
  var queryData = url.parse(request.url, true).query;

  db.query(`SELECT * FROM hero where id=?`, [queryData.id], function (error2, topic) {
    var name = topic[0].name;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var queryData_id = queryData.id;

    if (error2) {
      throw error;
    }
    var hero_management_update = hero_management_update_template.HTML(name, date, time, contents, queryData_id);
    response.send(hero_management_update);
  });
});

//hero 관리 방수정 프로세스
app.post('/hero/hero_management/update_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;

  var post = request.body;
  var name = post.update_name;
  var date = post.update_date;
  var time = post.update_time;
  var contents = post.update_contents;
  var queryData_id = queryData.id;
  console.log(name, date, time, contents, queryData_id);

  db.query('UPDATE hero SET name=?, date=?, time=?, contents=? WHERE id=?', [name, date, time, contents, queryData_id], function (error, result) {
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
  var team = require('./lib/team');
  response.send(team);
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
    db.query(`SELECT * FROM user where email=?`, [queryData.email], function(error2,users){
      if(error2){
        throw error2;
      }
    var user = user_template.HTML(users, queryData_email, image);
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