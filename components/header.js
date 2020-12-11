module.exports = {
	header: function(queryData_email) {
	   return`
		  <style>
			 * {box-sizing: border-box;}
			 .header--bg{
				background-color: #1680f8;
				background-size: 100% 100%;
			 }
			 .header {
				overflow: hidden;
				background-color: #1680f8;
				padding: 20px 10px;
			 }
			 
			 .header a {
				float: left;
				color: #f1f1f1;
				text-align: center;
				padding: 12px;
				text-decoration: none;
				font-size: 18px; 
				line-height: 25px;
				border-radius: 4px;
			 }
			 
			 .header a.logo {
				background: url("https://raw.githubusercontent.com/kimxminsu/App_kickkick/minsu/img/kickkick.png") left center no-repeat;
				background-size: 90%;
				font-size: 25px;
				font-weight: bold;
			 }
			 
			 .header a:hover {
				background-color: #1680f8;
				color: black;
			 }
			 
			 .header a.active {
				background-color: dodgerblue;
				color: white;
			 }
			 
			 .header-right {
				float: right;
			 }
			 
			 @media screen and (max-width: 500px) {
				.header a {
				   float: none;
				   display: block;
				   text-align: left;
				}
				
				.header-right {
				   float: none;
				}   
			 }
 
		  </style>
		  <div class="container">
			 <nav class="navbar">
				<ul class="nav navbar-nav pull-right">
				   <div class="header">
					  <a href="#default" class="logo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
						 <div class="header-right">
							<a href="/matching?email=${queryData_email}">MATCHING</a>
							<a href="/hero?email=${queryData_email}">HERO</a>
							<a href="/team?email=${queryData_email}">TEAM</a>
							<a href="/user?email=${queryData_email}">MYPAGE</a>
							<a href="/">LOGOUT</a>
						 </div>
				   </div>
				</ul>
			 </nav>
		  </div>
	   </html>   
	   `;
	}
 }