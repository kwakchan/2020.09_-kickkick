module.exports = {
	header: function(queryData_email) {
		return`
			<div class="container">
				<nav class="navbar">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span> 
						</button>
						<a class="navbar-brand" href="#"></a>
					</div>
					<div class="collapse navbar-collapse" id="myNavbar">
						<ul class="nav navbar-nav pull-right">
							<li><a href="/">Logout</a></li>
							<li><a href="/matching?email=${queryData_email}">MATCHING</a></li>
							<li><a href="/hero?email=${queryData_email}">HERO</a></li>
							<li><a href="/team?email=${queryData_email}">TEAM</a></li>
							<li><a href="/user?email=${queryData_email}">MYPAGE</a></li>
						</ul>
					</div>
				</nav>
			</div>
		`;
	}
}