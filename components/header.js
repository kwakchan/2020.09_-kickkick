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
				background-color: #f1f1f1;
				padding: 20px 10px;
			 }
			 
			 .header a {
				float: left;
				color: black;
				text-align: center;
				padding: 12px;
				text-decoration: none;
				font-size: 18px; 
				line-height: 25px;
				border-radius: 4px;
			 }
			 
			 .header a.logo {
				font-size: 25px;
				font-weight: bold;
			 }
			 
			 .header a:hover {
				background-color: #ddd;
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
					  <a href="#default" class="logo">킥킥 KickkicK</a>
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