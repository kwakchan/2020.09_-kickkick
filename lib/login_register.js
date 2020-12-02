module.exports = {
    HTML: function (dup) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
            <title>회원가입</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="http://fonts.googleapis.com/earlyaccess/hanna.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script language="javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
            <script src="colors.js"></script>
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
            <style type="text/css">
                body {
                    background-color: #A9D0F5;
                    text-align: center;
                }
                .set {
                    text-align: center;
                    margin-top: 40%;
                }
                .wel1 {text-align: center;
                        font-family: 'Jua', sans-serif;
                        color: #ffffff;
                        font-size: 50px;
                        text-shadow:0px 3px 2px #848484;}
                .wel2 {text-align: center;
                        font-family: 'Jua', sans-serif;
                        color: #ffffff;
                        font-size: 30px;
                        text-shadow:0px 3px 2px #848484;}
                .btn {
                    text-align: center;
                    margin-top: 5%;
                }
                .btn1 {
                    background-color:#ffffff;
                    border-radius:28px;
                    border:3px solid #ffe400;
                    display:inline-block;
                    cursor:pointer;
                    color:#ffe400;
                    font-size:20px;
                    width: 250px;
                    padding:10px;
                    font-family: 'Hanna', sans-serif;
                    text-align: center;
                    margin-top: 5%;
                }
                .btn2 {
                    background-color:#ffffff;
                    border-radius:28px;
                    border:3px solid #1fda11;
                    display:inline-block;
                    cursor:pointer;
                    color:#1fda11;
                    font-size:20px;
                    width: 250px;
                    padding:10px;
                    font-family: 'Hanna', sans-serif;
                    text-align: center;
                    margin-top: 5%;
                }
                .btn3 {
                    background-color:#ffffff;
                    border-radius:28px;
                    border:3px solid #003399;
                    display:inline-block;
                    cursor:pointer;
                    color:#003399;
                    font-size:20px;
                    width: 250px;
                    padding:10px;
                    font-family: 'Hanna', sans-serif;
                    text-align: center;
                    margin-top: 5%;
                }
                
            </style>
            </head>
            <body>
                <form action="/login/register_process" method="post" onsubmit="return checks()">
                    <p><input type="text" name="name" placeholder="name"></p>
                    <p><input type="text" name="email" placeholder="email" id="mail"></p>
                    <p>${dup}</p>
                    예) id@domain.com
                    <p><input type="password" name="password" placeholder="password" id="password"></p>
                    8~12자의 영문 대소문자와 숫자로만 입력
                    <p><input type="password" name="password2" placeholder="password" id="password_check"></p>
                    8~12자의 영문 대소문자와 숫자로만 입력
                    <p>
                    <input type="submit" value="가입">
                    </p>
                </form>
            </body>
            </html>
            `;
    }
}