var url = require('url');
var qs = require('querystring');
var fs = require('fs')
var express = require('express');
var app = express();
var router = express.Router()
var msg = require('dialog');
var bcrypt = require('bcrypt-nodejs');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var header_template = require('./components/header.js')
var footer_template = require('./components/footer.js')
var start_template = require('./lib/start.js')
var login_template = require('./lib/login.js')
var login_register_template = require('./lib/login_register.js')
var matching_template = require('./lib/matching.js');
var matching_make_template = require('./lib/matching_make.js');
var matching_management_template = require('./lib/matching_management.js');
var matching_password_template = require('./lib/matching_password.js');
var matching_management_update_template = require('./lib/matching_management_update.js');
var hero_template = require('./lib/hero.js');
var hero_make_template = require('./lib/hero_make.js');
var hero_management_template = require('./lib/hero_management.js');
var hero_password_template = require('./lib/hero_password.js');
var hero_management_update_template = require('./lib/hero_management_update.js');
var team_template = require('./lib/team.js');
var team_make_template = require('./lib/team_make.js');
var team_register_template = require('./lib/team_register.js');
var team_mymember_template = require('./lib/team_mymember.js');
var user_template = require('./lib/user.js');
var user_update_template = require('./lib/user_update.js');

// mySQL 데이터베이스 
var mysql = require('mysql');
var db = mysql.createConnection({
  connectionLimit: 10,
  host: 'localhost',//'202.30.32.218',
  port: '3305',//'3306',
  user: 'root',
  database: 'kickkick',
  dateStrings: 'date'
});
db.connect();

// multer 파일올리기
var multer = require('multer'); // 파일 올리기 모듈
var _storage = multer.diskStorage({
  destination: function (req, file, cb) { // 저장될 경로
    cb(null, 'uploads/');   // uploads 폴더로
  },
  filename: function (req, file, cb) { // 파일명
    cb(null, file.originalname); // 파일명을 원본 이름으로
  }
})
var upload = multer({ storage: _storage })

app.use('/img', express.static('img')); // img 폴더 이미지 서버로 올리기
app.use('/uploads', express.static('uploads')); // uploads 폴더 이미지 서버로 올리기

// 유저이미지 불러오기
app.get('/upload', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  response.render(`upload?email=${queryData_email}`);
});

app.post('/upload', upload.single('userfile'), function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  console.log(queryData_email);
  db.query(`UPDATE user SET image=? WHERE email=?;`, [request.file.filename, queryData_email], function (error, data) {
    if (error) throw error
    response.redirect(`/user?email=${queryData_email}`);
  });
});

// 팀이미지 불러오기
app.get('/team_upload', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  response.render(`team_upload?email=${queryData_email}`);
});

app.post('/team_upload', upload.single('userfile'), function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  db.query(`SELECT * FROM user WHERE email=?`, [queryData_email], function (error, users) {
    if (error) throw error;
    var user_team = users[0].team;
    console.log(user_team);
    console.log(upload.single('userfile'));
    // db.query(`UPDATE team SET team_image=? WHERE team_name=?;`, [request.file.filename, user_team], function (error, data) {
    //   if (error) throw error
    //   response.redirect(`/team/team_mymember?email=${queryData_email}`);
    // });
  });
});


// Loading 로딩----------------------------------------------
app.get('/', function (request, response) {
  var footer = footer_template.footer();
  var start = start_template.HTML(footer);
  response.send(start);
});

// Login 로그인
app.get('/login', function (request, response) {
  var dup = '';
  var login = login_template.HTML(dup);
  response.send(login);
});

// Login 로그인 process
app.post('/login/login_process', function (request, response) {
  var post = request.body;
  var email = post.email;
  var password = post.password;

  db.query('SELECT * FROM user where email=?', [email], function (error, rows) {
    if (error) throw error;
    if (rows.length) {
      bcrypt.compare(password, rows[0].password, function (err, res) {
        if (res) {
          response.redirect(`/user?email=${email}`);
        } else {
          dup = '아이디와 비밀번호를 확인해주세요';
          var result = dup.fontcolor("red");
          var login = login_template.HTML(result);
          response.send(login);
        }
      });
    }
  });
});

// Login 회원가입
app.get('/login/login_register', function (request, response) {
  var dup = '';
  var register = login_register_template.HTML(dup);
  response.send(register);
});

// Login 회원가입 프로세스
app.post('/login/register_process', function (request, response) {
  var post = request.body;
  var email = post.email;
  var password = post.password;
  var name = post.name;

  bcrypt.hash(password, null, null, function (err, hash) {
    db.query("SELECT * FROM user WHERE email=?", [email], function (err, data) {
      if (data.length == 0) {
        var sql = "INSERT INTO user (email, password, name) VALUES(?,?,?);";
        var params = [email, hash, name];
        db.query(sql, params, function (err, rows) {
          if (err) throw err;
          response.redirect(`/login`);

        });
      } else {
        dup = '아이디 중복입니다';
        var result = dup.fontcolor("red");
        var register = login_register_template.HTML(result);
        response.send(register);
      }
    });
  });
});

// matching 리스트--------------------------------------------
app.get('/matching', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  db.query(`SELECT * FROM matching`, function (error, topics) {
    if (error) throw error;
    db.query(`SELECT count(*) from matching`, function (error2, topic) {
      if (error2) throw error2;
      var count = topic[0]['count(*)'];
      var header = header_template.header(queryData_email);
      var footer = footer_template.footer();
      var list = matching_template.list(topics, queryData_email);
      var detail = matching_template.detail(topics, queryData_email);
      var matching = matching_template.HTML(header, footer, list, detail, count, queryData_email);
      response.send(matching);
    })

  });
});

// matching 날짜 시간 찾기
app.post('/matching_search', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var post = request.body;
  var date = post.date;
  var time = post.time;

  db.query(`select * from matching where date=? or time=?`, [date, time], function (error, find) {
    if (error) {
      throw error;
    }
    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();
    var list = hero_template.list(find);
    var matching = matching_template.HTML(header, footer, list, queryData_email);
    response.send(matching);
  });
});

//maching 방만들기
app.get('/matching/matching_make', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  db.query(`SELECT * FROM user where email=?`, [queryData_email], function (error2, users) {
    if (error2) {
      throw error2;
    }
    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();
    var matching_make = matching_make_template.HTML(header, footer, users, queryData_email);
    response.send(matching_make);
  });
});

//maching 방만들기 프로세스
app.post('/matching/create_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var post = request.body;
  var title = post.form_title;
  var team = post.form_team;
  var date = post.form_date;
  var time = post.form_time;
  var contents = post.form_contents;
  var writer_email = post.writer_email;

  sql = "INSERT INTO matching (title, team, date, time, contents, writer_email) VALUES(?,?,?,?,?,?);";
  db.query(sql, [title, team, date, time, contents, writer_email], function (error, result) {
    if (error) {
      throw error;
    }
    response.writeHead(302, { Location: `/matching?email=${queryData_email}` });
    response.end();
  });
});

//matching 관리(수정, 삭제)
app.get('/matching/matching_management', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_id = queryData.id;
  var queryData_email = queryData.email;

  db.query(`SELECT * FROM matching where id=?`, [queryData_id], function (error2, topic) {
    var title = topic[0].title;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var queryData_id = queryData.id;
    var team = topic[0].team;
    var writer_email = topic[0].writer_email;

    if (error2) {
      throw error;
    }
    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();
    var matching_management = matching_management_template.HTML(header, footer, title, team, date, time, contents, writer_email, queryData_id, queryData_email);
    response.send(matching_management);
  });
});

//matching 패스워드
app.get('/matching/matching_management/password', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var queryData_id = queryData.id
  var queryData_writer_email = queryData.writer_email;
  dup = '';

  var header = header_template.header(queryData_email);
  var footer = footer_template.footer();
  var matching_password = matching_password_template.HTML(header, footer, queryData_id, queryData_email, queryData_writer_email, dup);
  response.send(matching_password);
});

//matching 패스워드프로세스
app.post('/matching/matching_management/password_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var queryData_id = queryData.id
  var queryData_writer_email = queryData.writer_email;
  var post = request.body;
  var password = post.password;

  db.query('SELECT * FROM user where email =?', [queryData_writer_email], function (err, rows) {
    if (err) throw err;
    if (rows.length) {
      bcrypt.compare(password, rows[0].password, function (error2, res) {
        if (res) {
          response.redirect(`/matching/matching_management?id=${queryData_id}&email=${queryData_email}&writer=${queryData_writer_email}`);
        } else {
          dup = '비밀번호를 확인해주세요';
          var result = dup.fontcolor("red");
          var matching_password = matching_password_template.HTML(queryData_id, queryData_email, queryData_writer_email, result);
          response.send(matching_password);
        }
      });
    }
  });
});

//matching 관리 방수정
app.get('/matching/matching_management/update', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  console.log(queryData_email);
  db.query(`SELECT * FROM matching where id=?`, [queryData.id], function (error2, topic) {
    if (error2) throw error;
    var title = topic[0].title;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var team = topic[0].team;
    var queryData_id = queryData.id;

    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();
    var matching_management_update = matching_management_update_template.HTML(header, footer, title, team, date, time, contents, queryData_id, queryData_email);
    response.send(matching_management_update);
  });
});

//matching 관리 방수정 프로세스
app.post('/matching/matching_management/update_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  var post = request.body;
  var title = post.update_title;
  var date = post.update_date;
  var time = post.update_time;
  var team = post.update_team;
  var contents = post.update_contents;
  var queryData_id = queryData.id;

  db.query('UPDATE matching SET title=?, team=?, date=?, time=?, contents=? WHERE id=?', [title, team, date, time, contents, queryData_id], function (error, result) {
    response.redirect(`/matching?email=${queryData_email}`);
  });
});

//matching 관리 방삭제 프로세스
app.get('/matching/matching_management/delete_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var post = request.body;
  var queryData_id = queryData.id;
  db.query('DELETE FROM matching WHERE id = ?', [queryData_id], function (error, result) {
    if (error) {
      throw error;
    }
    response.writeHead(302, { Location: `/matching?email=${queryData_email}` });
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
    db.query(`select count(*) from hero`, function (error, topic) {
      var count = topic[0]['count(*)'];
      var header = header_template.header(queryData_email);
      var footer = footer_template.footer();
      var list = hero_template.list(topics, queryData_email);
      var detail = hero_template.detail(topics, queryData_email);
      var hero = hero_template.HTML(header, footer, list, detail, count, queryData_email);
      response.send(hero);
    });
  });
});

// hero 날짜 시간 찾기
app.post('/hero_search', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var post = request.body;
  var date = post.date;
  var time = post.time;

  db.query(`select * from hero where date=? or time=?`, [date, time], function (error, find) {
    if (error) {
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

  db.query(`SELECT * FROM user where email=?`, [queryData_email], function (error2, users) {
    if (error2) {
      throw error2;
    }
    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();
    var hero_make = hero_make_template.HTML(header, footer, users, queryData_email);
    response.send(hero_make);
  });
});

//hero 방만들기 프로세스
app.post('/hero/create_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  var post = request.body;
  var title = post.form_title;
  var name = post.form_name;
  var date = post.form_date;
  var time = post.form_time;
  var contents = post.form_contents;
  var writer_email = post.writer_email;

  sql = "INSERT INTO hero (title, name, date, time, contents, writer_email) VALUES(?,?,?,?,?,?);";
  db.query(sql, [title, name, date, time, contents, writer_email], function (error, result) {
    if (error) {
      throw error;
    }
    response.writeHead(302, { Location: `/hero?email=${queryData_email}` });
    response.end();
  });
});

//hero 관리(수정, 삭제)
app.get("/hero/hero_management", function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_id = queryData.id;
  var queryData_email = queryData.email;

  db.query(`SELECT * FROM hero where id=?`, [queryData_id], function (error2, topic) {
    if (error2) throw error;
    var title = topic[0].title;
    var name = topic[0].name;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var queryData_id = queryData.id;
    var writer_email = topic[0].writer_email;
    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();

    var hero_management = hero_management_template.HTML(header, footer, title, name, date, time, contents, writer_email, queryData_id, queryData_email);
    response.send(hero_management);
  });
});

//hero 패스워드
app.get('/hero/hero_management/password', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var queryData_id = queryData.id
  var queryData_writer_email = queryData.writer_email;
  var header = header_template.header(queryData_email);
  var footer = footer_template.footer();
  dup = '';
  var hero_password = hero_password_template.HTML(header, footer, queryData_id, queryData_email, queryData_writer_email, dup);
  response.send(hero_password);
});

//hero 패스워드프로세스
app.post('/hero/hero_management/password_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var queryData_id = queryData.id
  var queryData_writer_email = queryData.writer_email;
  var post = request.body;
  var password = post.password;

  db.query('SELECT * FROM user where email =?', [queryData_writer_email], function (err, rows) {
    if (err) throw err;
    if (rows.length) {
      bcrypt.compare(password, rows[0].password, function (error2, res) {
        if (res) {
          response.redirect(`/hero/hero_management?id=${queryData_id}&email=${queryData_email}&writer=${queryData_writer_email}`);
        } else {
          dup = '비밀번호를 확인해주세요';
          var result = dup.fontcolor("red");
          var hero_password = hero_password_template.HTML(queryData_id, queryData_email, queryData_writer_email, result);
          response.send(hero_password);
        }
      });
    }
  });
});

//hero 관리 방수정
app.get("/hero/hero_management/update", function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  db.query(`SELECT * FROM hero where id=?`, [queryData.id], function (error2, topic) {
    if (error2) throw error;
    var title = topic[0].title;
    var name = topic[0].name;
    var date = topic[0].date;
    var time = topic[0].time;
    var contents = topic[0].contents;
    var queryData_id = queryData.id;
    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();
    var hero_management_update = hero_management_update_template.HTML(header, footer, title, name, date, time, contents, queryData_id, queryData_email);
    response.send(hero_management_update);
  });
});

//hero 관리 방수정 프로세스
app.post('/hero/hero_management/update_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  var post = request.body;
  var title = post.update_title;
  var name = post.update_name;
  var date = post.update_date;
  var time = post.update_time;
  var contents = post.update_contents;
  var queryData_id = queryData.id;

  db.query('UPDATE hero SET title=?, name=?, date=?, time=?, contents=? WHERE id=?', [title, name, date, time, contents, queryData_id], function (error, result) {
    response.redirect(`/hero?email=${queryData_email}`);
  });
});

//hero 관리 방삭제 프로세스
app.get('/hero/hero_management/delete_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  var post = request.body;
  var queryData_id = queryData.id;
  db.query('DELETE FROM hero WHERE id = ?', [queryData_id], function (error, result) {
    if (error) {
      throw error;
    }
    response.redirect(`/hero?email=${queryData_email}`);
  });
});

//team 팀 -------------------------------------
app.get('/team', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  db.query(`SELECT * FROM user WHERE email = ?`, [queryData_email], function (error1, users) {
    if (error1) throw error1;
    var user_image = users[0].image;
    if (users[0].team == null) { // 팀이 없으면 'No' Team으로 가입(insert into team (team_name, area) values('No','No');)
      db.query(`UPDATE user SET team='No' WHERE email=?`, [queryData_email], function (error2, teams) {
        if (error2) throw error2;
        var team_image = null;
        var header = header_template.header(queryData_email);
        var footer = footer_template.footer();
        var team = team_template.HTML(header, footer, queryData_email, users, user_image, team_image);
        response.send(team);
      });
    } else {
      db.query(`SELECT * FROM team WHERE team_name = ?`, [users[0].team], function (error2, teams) {
        if (error2) throw error2;
        var user_image = users[0].image;
        var team_image = teams[0].team_image;
        var header = header_template.header(queryData_email);
        var footer = footer_template.footer();
        var team = team_template.HTML(header, footer, queryData_email, users, user_image, team_image);
        response.send(team);
      });
    }
  });
});

//team 내 팀멤버 리스트
app.get('/team/team_mymember', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  db.query(`SELECT * FROM user where email=?`, [queryData_email], function (error, users) {
    if (error) throw error;
    var users_team = users[0].team;
    db.query(`SELECT * FROM user WHERE team=?`, [users_team], function (error2, teams) {
      if (error2) throw erro2;
      db.query(`SELECT * FROM team WHERE team_name=?`, [users_team], function (error3, team) {
        if (error3) throw error3;
        db.query(`SELECT count(*) from user WHERE team=?`, [users_team], function (error4, member_count){ 
          if (error4) throw error4;
          var header = header_template.header(queryData_email);
          var footer = footer_template.footer();
          var list = team_mymember_template.list(teams);
          var team_image = team[0].team_image;
          var count = member_count[0]['count(*)'];
          var team_mymember = team_mymember_template.HTML(header, footer, users_team, list, team_image, count, queryData_email);
          response.send(team_mymember);
        });  
      });
    });
  });
});

//team 팀 생성하기
app.get('/team/team_make', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var dup = '';
  var header = header_template.header(queryData_email);
  var footer = footer_template.footer();
  var team_make = team_make_template.HTML(header, footer, queryData_email, dup);
  response.send(team_make);
});

//team 팀 생성하기 프로세스
app.post('/team/team_make_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  var post = request.body;
  var team_name = post.team_name; 
  var area = post.area; 

  db.query('SELECT * FROM team where team_name=?', [team_name], function (err, rows) {
    if (rows.length) {
      dup = '팀이 존재합니다.';
      var result = dup.fontcolor("red");
      var team_make = team_make_template.HTML(queryData_email, result);
      response.send(team_make)
    }
    else {
      db.query('SELECT * FROM user where email=?', [queryData_email], function (err, rows) {
        if (err) throw err;
        else {
          db.query("INSERT INTO team (team_name, area) VALUES(?,?);", [team_name, area], function (err, rows) {
            if (err) throw err;
            db.query("UPDATE user SET team=? WHERE email=?", [team_name, queryData_email], function (err, rows) {
              if (err) throw err;
              else {
                response.redirect(`/team?email=${queryData_email}`);
              }
            });
          });
        }
      });
    }
  });
});

//team 팀 가입하기 
app.get('/team/team_register', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var dup = '';

  db.query(`SELECT * FROM team`, function (error, topics) {
    if (error) throw error;
    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();
    var list = team_register_template.list(topics);
    var team_register = team_register_template.HTML(header, footer, queryData_email, list, dup);
    response.send(team_register);
  });
});

//team 팀 가입하기 프로세스
app.post('/team/team_register_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var post = request.body;
  var team_name = post.team_name;

  db.query('SELECT * FROM team where team_name=?', [team_name], function (err, topics) {
    if (!topics.length) {
      dup = '팀이 존재하지 않습니다';
      var result = dup.fontcolor("red");
      var header = header_template.header();
      var footer = footer_template.footer(queryData_email);
      var list = team_register_template.list(topics);
      var team_register = team_register_template.HTML(header, footer, queryData_email, list, result)
      response.send(team_register);
    }
    else {
      var sql = "UPDATE user SET team=? WHERE email=?";
      var params = [team_name, queryData_email];
      db.query(sql, params, function (err, rows) {
        if (err) { throw err; }
        response.redirect(`/team?email=${queryData_email}`);
      });
    }
  });
});

//chat 채팅------------------------------------ 
app.get('/chat', function (request, response) {
  var chat = require('./lib/chat');
  response.send(chat);
});

//user 유저------------------------------------
app.get('/user', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  db.query(`SELECT * FROM user where email=?`, [queryData_email], function (error, users) {
    var image_name = users[0].image
    if (error) throw error;
    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();
    var user = user_template.HTML(header, footer, users, queryData_email, image_name);
    response.send(user);
  });
});

//user 수정
app.get('/user/update', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  db.query(`SELECT * FROM user where email=?`, [queryData.email], function (error2, users) {
    if (error2) throw error;
    var name = users[0].name;
    var age = users[0].age;
    var team = users[0].team;
    var position = users[0].position;
    var height = users[0].height;
    var weight = users[0].weight;
    var header = header_template.header(queryData_email);
    var footer = footer_template.footer();
    var user_update = user_update_template.HTML(header, footer, queryData_email, name, age, team, position, height, weight);
    response.send(user_update);
  });
});

//user 수정 프로세스
app.post('/user/update_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

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
    function (error, result) {
      response.writeHead(302, { Location: `/user?email=${queryData_email}` });
      response.end();
    })

});

//user 로그아웃 프로세스
app.get('/user/logout_process', function (request, response) {
  response.writeHead(302, { Location: `/login` });
  response.end();
});

app.listen(3000, function () {
  console.log('Let`s go Kick Kick')
});