module.exports = {
    HTML:function(){ 
	  return `
		<!DOCTYPE html>
		<html>
		<meta charset="utf-8">
		<head>
			<title>용병-방만들기</title>
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

				#table{
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

			<form action="/hero/create_process" method="post" id="pop-up">
				<table id="table"> 	
						
						<tr>
							<td colspan="2">용병 이름</td>
							<td colspan="2"> <input type="text" class=form name='form_name'> </td>
						</tr>

						<tr>
							<td colspan="2">날짜</td>
							<td colspan="2"> <input type="date" class=form name='form_date'> </td>
						</tr>

						<tr>
							<td colspan="2">시간</td>
							<td colspan="2"> <input type="time" class=form name='form_time'> </td>
						</tr>

						<tr>
							<td colspan="2">내용</td>
							<td colspan="2"> <input type="text" class=form name='form_content'> </td>
						</tr>

						<tr>
							<td colspan="4"> 
								<div class="submit"> <input type="submit" value="방만들기"> </div> 
							</td>
						
							</td>
						</tr> 
						
				</table>
				</form>	
		</body>
		</html>
			`;
	}
}