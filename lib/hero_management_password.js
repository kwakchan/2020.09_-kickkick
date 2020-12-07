module.exports = {
	HTML: function (queryData_id) {
		return `
	<!DOCTYPE html>
	<html>
	<meta charset="utf-8">
	<head>
		<title>용병-관리</title>
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
		
		<style type="text/css">
			#pop-up{
			width: 320px;
			height: 280px;
			margin: 40% auto;
			font-size:15px;
			font-family: 'Nanum Gothic';
			color: white;
			background-color: lightgray;
			line-height: 50px;
			border: solid 2px grey;
			border-radius: 40px;
			
			
			}
			#table2{
				text-align: center;
				margin: auto;
				align-items: center;
			}
			
			#submit{
				width: 100px;
				background-color: gray;
				text-align: center;
				margin: auto;
				align-items: center;
			}
		</style>
	</head>
    <body>
		<form action="/hero/hero_management/update_process?id=${queryData_id}" method="post" id="pop-up">
			<table id="table2"> 
				<tr>
					<td colspan="2">비밀번호</td>
					<td colspan="2"> <input type="text" class=form name='update_title'> </td>
				</tr>
				
				<tr>
					<td colspan="4"> 
						<div id="submit"> <input type="submit" value="수정하기"> </div> 
					</td>
				</tr> 
			</table>	
		</form> 
					
	</body>
	</html>
	`;
	}
}