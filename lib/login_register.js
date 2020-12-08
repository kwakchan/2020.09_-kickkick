module.exports = {
    HTML: function (dup) {
       return`
       <!DOCTYPE html>
      <html>
      <head>
         <title>회원가입</title>
         <meta charset="utf-8">

         <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
         <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
         <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script>
            
        var checkLoginStatus = function(response) {
        console.log(response);
        // statusChangeCallback(response);
        if(response.status === 'connected'){
            document.querySelector('#authBtn').value = 'Logout';
        } else {
            document.querySelector('#authBtn').value = 'Login';
        }
        }
        
        window.fbAsyncInit = function() { //페이스북 SDK 초기화
        FB.init({
        appId      : '1014875612351860',
        cookie     : true,  // enable cookies to allow the server to access 
                        // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v8.0', // use graph api version 2.8
        callbackUrl   : "http://localhost/class/team.html",
        isPopup: false
        });
    
        // Now that we've initialized the JavaScript SDK, we call 
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.
        
        FB.getLoginStatus(checkLoginStatus);
    
    };
    
        // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        </script>
        <script>
        function checks(){ 
            var hobbyCheck = false; 
            var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/); 
            var getCheck= RegExp(/^[a-zA-Z0-9]{8,12}$/); 
            var getName= RegExp(/^[가-힣]+$/);
            var fmt = RegExp(/^\d{6}[1234]\d{6}$/); //형식 설정
            //비밀번호 공백 확인 
            if($("#password").val() == ""){ 
                alert("비밀번호 입력바람"); 
                $("#password").focus(); 
                return false; } 
                
            //아이디 비밀번호 같음 확인 
            if($("#mail").val() == $("#password").val()){ 
                alert("이메일과 비밀번호가 같습니다"); 
                $("#password").val(""); 
                $("#password").focus(); 
                return false; } 
                
            //비밀번호 유효성검사 
            if(!getCheck.test($("#password").val())){ 
                alert("비밀번호 형식에 맞게 입력해주세요"); 
                $("#password").val(""); 
                $("#password").focus(); 
                return false; } 
                
            //비밀번호 확인란 공백 확인 
            if($("#password_check").val() == ""){ 
                alert("비밀번호 확인란을 입력해주세요"); 
                $("#password_check").focus(); 
                return false; } 
                
            //비밀번호 서로확인 
            if($("#password").val() != $("#password_check").val()){ 
                alert("비밀번호가 상이합니다"); 
                $("#password").val(""); 
                $("#password_check").val(""); 
                $("#password").focus(); 
                return false; } 
                
            //이메일 공백 확인 
            if($("#mail").val() == ""){ 
                alert("이메일을 입력해주세요"); 
                $("#mail").focus(); 
                return false; } 
                
            //이메일 유효성 검사 
            if(!getMail.test($("#mail").val())){ 
                alert("이메일형식에 맞게 입력해주세요") 
                $("#mail").val(""); 
                $("#mail").focus(); 
                return false; }
            }
            //
            if($("#email").val() != $("#password_check").val()){ 
                alert("비밀번호가 상이합니다"); 
                $("#password").val(""); 
                $("#password_check").val(""); 
                $("#password").focus(); 
                return false; } 
    </script>


<style>
.register{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    margin-top: 3%;
    padding: 3%;
}
.register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
}
.register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
}
.register-right{
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
}
.register-left img{
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: #0062cc;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
}
.register .nav-tabs{
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 13%;
    float: right;
}
.register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
}

</style>



      </head>
      <body>
      <div class="container register">
      <div class="row">
          <div class="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
              <h3>Welcome</h3>
              <p>You are 30 seconds away from earning your own money!</p>
              <input type="button" value="Login" onClick="location.href= 'login' "/>
          </div>
          <div class="col-md-9 register-right">
              <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                  <li class="nav-item">
                      <a class="nav-link active" id="home-tab" data-toggle="tab" href="/" role="tab" aria-controls="home" aria-selected="true">X</a>
                  </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <h3 class="register-heading">Apply as a Employee</h3>
                      <form action="/login/register_process" method="post" onsubmit="return checks()">
                      <div class="row register-form">
                          <div class="col-md-6">
                              <div class="form-group">
                                  <input type="text" class="form-control" name="name" placeholder="Name *" value="" />
                              </div>
                              <div class="form-group">
                                  <input type="email" class="form-control" name="email" placeholder="Your Email *" value="" />
                                  &nbsp;&nbsp;${dup}
                              </div>
                              <div class="form-group">
                                  <input type="password" class="form-control" name="password" placeholder="Password *" value="" />
                                  &nbsp;&nbsp;8~12자의 영문 대소문자/숫자
                              </div>
                              <div class="form-group">
                                  <input type="password" class="form-control" name="password2" placeholder="Confirm Password *" value="" />
                              </div>
                              <div class="form-group">
                                  <div class="maxl">
                                      <label class="radio inline"> 
                                          <input type="radio" name="gender" value="male" checked>
                                          <span> Male </span> 
                                      </label>
                                      <label class="radio inline"> 
                                          <input type="radio" name="gender" value="female">
                                          <span>Female </span> 
                                      </label>
                                  </div>
                              </div>
                              <input type="submit" class="btnRegister"  value="Register"/>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <input type="email" class="form-control" placeholder="Your Email *" value="" />
                              </div>
                              <div class="form-group">
                                  <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />
                              </div>
                              <div class="form-group">
                                  <select class="form-control">
                                      <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                                      <option>What is your Birthdate?</option>
                                      <option>What is Your old Phone Number</option>
                                      <option>What is your Pet Name?</option>
                                  </select>
                              </div>
                              <div class="form-group">
                                  <input type="text" class="form-control" placeholder="Enter Your Answer *" value="" />
                              </div>
                              <input type="submit" class="btnRegister"  value="Register"/>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>

  </div>
      </body>
      </html>
      `;
    }
 }