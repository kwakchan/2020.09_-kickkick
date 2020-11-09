var login = `
<!DOCTYPE html>
<html>
<head>
	<title>로그인</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="http://fonts.googleapis.com/earlyaccess/hanna.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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
		callbackUrl	: "http://localhost/class/team.html",
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
	<div class="set">
		<div class="wel1">WELCOME<br></div>
		<div class="wel2">킥킥<br></div>
		<div class="btn">
			<form action="login_process" method="post">
				<p><input type="text" name="email" placeholder="email"></p>
				<p><input type="password" name="password" placeholder="password"></p>
				<p><input type="submit"></p>
			</form>

			<a class="btn1" href="matching.html">카카오톡으로 로그인</a><br>
			<a class="btn2">네이버로 로그인</a><br>
			<input class="btn3" type="button" id="authBtn" value="checking..." onclick="
				if(this.value === 'Login'){
				// now logout
				FB.login(function(res){ //페이스북 로그인 버튼을 눌렀을 때의 루틴
					console.log('login =>', res);
					checkLoginStatus(res);
				});
				} else {
				// now login
				FB.logout(function(res){
					console.log('logout =>', res);
					checkLoginStatus(res);
				});
				}
			">
			<div id="fb-root"></div>
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v8.0&appId=351413062728218&autoLogAppEvents=1" nonce="cd0Q7qvz"></script>
			<div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false" data-width=""></div>
		</div>
	</div>
</body>
</html>
`;

module.exports = login;