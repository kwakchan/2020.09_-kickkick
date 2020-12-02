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
var login_template = require('./lib/login.js')
var login_register_template = require('./lib/login_register.js')
var matching_template = require('./lib/matching.js');
var matching_make_template = require('./lib/matching_make.js');
var matching_management_template = require('./lib/matching_management.js');
var matching_management_update_template = require('./lib/matching_management_update.js');
var team_template = require('./lib/team.js');
var team_make_template = require('./lib/team_make.js');
var team_register_template = require('./lib/team_register.js');
var team_list_template = require('./lib/team_list.js');
var team_mymember_template = require('./lib/team_mymember.js');
var hero_template = require('./lib/hero.js');
var hero_make_template = require('./lib/hero_make.js');
var hero_management_template = require('./lib/hero_management.js');
var hero_management_update_template = require('./lib/hero_management_update.js');
var user_template = require('./lib/user.js');
var user_update_template = require('./lib/user_update.js');

// mySQL 데이터베이스 
var mysql = require('mysql');
var db = mysql.createConnection({
  connectionLimit: 10,
  host: 'localhost',//'202.30.32.218',
  port: '3306',//'3306',
  user: 'root',
  database: 'kickkick',
  dateStrings: 'date',
  password: '111111'
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

// 파일 불러오기
app.use('/uploads', express.static('uploads')); // uploads 폴더 이미지 서버로 올리기
app.use('/img', express.static('img')); // img 폴더 이미지 서버로 올리기

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
  // console.log(request.file.filename);
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
  var sql = 'SELECT * FROM user where email=?';

  db.query(sql, [email], function (error, rows) {
    if (error) throw error;
    if (rows.length) {
      bcrypt.compare(password, rows[0].password, function (err, res) {
        if (res) {
          response.redirect(`/user?email=${email}`);
        } else {
          //response.send('<script type="text/javascript">alert("비밀번호 확인");</script>');
          msg.info('아이디와 비밀번호를 확인해주세요');
          response.redirect(`/login`);
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
        var register = login_register_template.HTML(dup);
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
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email);
    var list = hero_template.list(find);
    var matching = matching_template.HTML(header, footer, list, queryData_email);
    response.send(matching);
  });
});

//matching 방만들기
app.get('/matching/matching_make', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  db.query(`SELECT team FROM user where email=?`, [queryData_email], function (error2, users) {
    if (error2) {
      throw error2;
    }
    var matching_make = matching_make_template.HTML(users, queryData_email);
    response.send(matching_make);
  });
});

//matching 방만들기 프로세스
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

  db.query(`SELECT name FROM user where email=?`, [queryData_email], function (error2, users) {
    if (error2) {
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

  db.query(`SELECT * FROM user where email=?`, [queryData_email], function (error, users) {
    var image_name = users[0].image;
    if (error) {
      throw error
    }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email);
    var team = team_template.HTML(header, footer, queryData_email, users, image_name);
    response.send(team);
  });
});

//team 팀 생성하기
app.get('/team/team_make', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  var team_make = team_make_template.HTML(queryData_email);
  response.send(team_make);
});
//team 팀 생성하기 프로세스
app.post('/team/team_make_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  var post = request.body;
  var team_name = post.team_name; //팀명
  var area = post.area; //지역

  // var sql = "INSERT INTO team (team_name, area) VALUES(?,?);";
  // var params = [team_name, area];
  db.query('SELECT * FROM team where team_name=?', [team_name], function (err, rows) {
    if (rows.length) {
      msg.info(team_name + '팀이 존재합니다');
      response.redirect(`/team/team_make?email=${queryData_email}`);
    }
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
});

//team 팀 가입하기 
app.get('/team/team_register', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  var team_register = team_register_template.HTML(queryData_email);
  response.send(team_register);
});

//team 팀 가입하기 프로세스
app.post('/team/team_register_process', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;
  var post = request.body;
  var team_name = post.team_name; //팀명

  db.query('SELECT * FROM team where team_name=?', [team_name], function (err, rows) {
    if (!rows.length) {
      msg.info(team_name + '이 존재하지 않습니다');
      response.redirect(`/team/team_register?email=${queryData_email}`);
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

//team 관리
app.get('/team/team_management', function (request, response) {
  var team_make = require('./lib/team_management');
  var post = request.body;
  var team_name = post.team_name;
  var area = post.area;
  response.send(team_make);
});

//team 프로필
app.get('/team/team_management_profile', function (request, response) {
  var team_management_profile = require('./lib/team_management_profile');
  response.send(team_management_profile);
});

//team 리스트
app.get('/team/team_list', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  db.query(`SELECT * FROM team`, function (error, topics) {
    if (error) {
      throw error;
    }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email);
    var list = team_list_template.list(topics);
    var team_list = team_list_template.HTML(header, footer, list, queryData_email);
    response.send(team_list);
  });
});

//team 내팀멤버 리스트
app.get('/team/team_mymember', function (request, response) {
  var queryData = url.parse(request.url, true).query;
  var queryData_email = queryData.email;

  // db.query(`SELECT * FROM team`, function (error, topics) {
  db.query('select user.* from user left join team on user.team = team.team_name where user.team =  ?', [team], function (err, rows) {
    if (error) {
      throw error;
    }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email);
    var list = team_mymember_template.list(topics);
    var team_mymember = team_mymember_template.HTML(header, footer, list, queryData_email);
    response.send(team_mymember);
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

  db.query(`SELECT * FROM user where team = ( SELECT team FROM user where email=? )`, [queryData_email], function (error, users) {
    var image_name = users[0].image
    if (error) {
      throw error;
    }
    var header = header_template.header();
    var footer = footer_template.footer(queryData_email);
    var user = user_template.HTML(header, footer, users, queryData_email, image_name);
    response.send(user);
  });
});

//user 수정
app.get('/user/update', function (request, response) {
  var queryData = url.parse(request.url, true).query;

  db.query(`SELECT * FROM user where email=?`, [queryData.email], function (error2, users) {
    var name = users[0].name;
    var age = users[0].age;
    var team = users[0].team;
    var position = users[0].position;
    var height = users[0].height;
    var weight = users[0].weight;
    var queryData_email = queryData.email;

    if (error2) {
      throw error;
    }
    var user_update = user_update_template.HTML(queryData_email, name, age, team, position, height, weight);
    response.writeHead(200);
    response.end(user_update);
  });
});

//user 수정 프로세스
app.post('/user/update_process', function (request, response) {
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