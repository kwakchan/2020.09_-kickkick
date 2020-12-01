module.exports = {
	footer: function(queryData_email) {
		return `

		<style type="text/css">
			#footer{
				background: white;

				display: flex;
				justify-content: center;
			}
		</style>

		<!--footer-->
		<div data-role="footer" data-position="fixed" id="footer">
			<table>
				<tr>
					<td> <a href="/matching?email=${queryData_email}">
							<img data-role="button" src="http://localhost:3000/img/matching.png" height="65px" width="65px"> 
						</a>
					</td>

					<td> <a href="/hero?email=${queryData_email}"> 
							<img data-role="button" src="http://localhost:3000/img/hero.png" height="65px" width="65px"> 
						</a>
					</td>

					<td> <a  href="/team?email=${queryData_email}">
							<img data-role="button" src="http://localhost:3000/img/team.png" height="65px" width="65px">
						</a>
					</td>

					<td> <a href="/chat?email=${queryData_email}">
							<img data-role="button" src="http://localhost:3000/img/chat.png" height="65px" width="65px"> 
						</a>
					</td>

					<td> <a href="/user?email=${queryData_email}"> 
							<img data-role="button" src="http://localhost:3000/img/user.png" height="65px" width="65px"> 
						</a>
					</td>
				</tr>	
			</table>
		</div>		
		`;
	}
}