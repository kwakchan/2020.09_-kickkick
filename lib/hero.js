module.exports = {
	HTML: function (list, queryData_email) {
	  return `
		<!DOCTYPE html>
		<html>
		<meta charset="utf-8">

		<head>
			<title>용병</title>
			<meta name="viewport" content="width=device-width, initial-scale=1"> 
			<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
			<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

			<style type="text/css">
				#header{
					background: white;
					font-family: HY동녘B;

					display: flex;
					justify-content: center;
				}
					
				#footer{
					background: white;

					display: flex;
					justify-content: center;
				}

				#content{
					width: 100%;
					height: 100%;

					background: white;
					color: black;
					font-size: 0.625em;

					display: flex;
					justify-content: center;
					
				}


				#matching-logo{
					width: 6rem;
					height: 6rem;
					margin: 0.625em;
					border: 0.625em;
				}

				#btn2 {
					width: 6.00em;
					height: 3.50em;

					background: white;
					color: gray;
					font-size:1.250em;
					line-height: 3.125em;

					border: solid 2px grey;
					border-radius: 30px;

					display: flex;
					justify-content: center;
				}

				#title{
					font-size: 1.5rem;
					
					font-family: 'HY동녘B';
					text-align: left;
					font-weight: bold;

					margin: 20px;
					border: 10px;
				}

				#matching-search{
				width: 3.750em;
				height: 1.875em;
				font-size: 1.250em;
				font-family: '돋움';
				color: white;
				text-align: center;
				background: gray;
				border: solid 2px grey;
				border-radius: 30px;
				}

			</style>

		</head>

		<body>
		<div data-role="page" id="bar">	
			<!--header-->
			<div data-role="header" data-position="fixed" id="header">
				<h1>킥킥</h1>
				<h6>Kick Kick</h6>
			</div>
			
			<!--content-->
			<div data-role="content" id="content"> 
			
			<!--content 방만들기-->
			<div style="width: 100%; height: 100%;">   
			<table class="matching-create" style="width: 100%; height: 20%; text-align: center;">
				<tr>
					<th class="tg-c3ow" colspan="2" rowspan="2"> <img src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%9A%A9%EB%B3%91%20%EB%A1%9C%EA%B3%A0.png" id="matching-logo"> </th>
					<th class="tg-c3ow" colspan="6" id="title">  <br>용병구함</th>
				</tr>
				<tr>
				<td class="tg-c3ow" colspan="3"> <button type="button" id="btn2"  onclick="location.href='/hero/hero_make?email=${queryData_email}'">만들기</button> </td>
				<td class="tg-c3ow" colspan="3"> <button type="button" id="btn2"  onclick="location.href='/hero/hero_management'">관리</button> </td>
				</tr>
			</table>
		

				<!--content 방 리스트-->
			<br>
			<table class="matching-list" style="width: 100%; height: 100%; text-align: center;">
					<thead>
					<tr>
						<th class="tg-c3ow" align="center">
							<form action="#.php" style="width: 8em">
								<input type="date">
							</form>	
						</th>

						<th class="tg-c3ow" align="center">
							<form action="#.php" style="width: 8em">
								<input type="time">
							</form>	
						</th>

						<th class="tg-c3ow" colspan="4" align="center"> <div id="matching-search">검색</div> </th>
						
					</tr>
					</thead>
					   ${list}
					</tbody>
				</table>
				</div>
			</div>	
			
			<!--footer-->
			<div data-role="footer" data-position="fixed" id="footer">
				<table>
					<tr>
						<td> <a href="/matching">
								<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EB%A7%A4%EC%B9%AD.png" height="65px" width="65px"> 
							</a>
						</td>

						<td> <a href="/hero"> 
								<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%9A%A9%EB%B3%91.jpg" height="65px" width="65px"> 
							</a>
						</td>

						<td> <a  href="/team">
								<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%ED%8C%80.png" height="65px" width="65px">
							</a>
						</td>

						<td> <a href="/chat">
								<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%B1%84%ED%8C%85.png
								" height="65px" width="65px"> 
							</a>
						</td>

						<td> <a href="/user"> 
								<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%9C%A0%EC%A0%80.png" height="65px" width="65px"> 
							</a>
						</td>
					</tr>	
				</table>
			</div>		


		</div>


		</body>

		</html>
		`;
},
// 데이터베이스 hero 테이블 
list: function (topics) {
    var list = '';
    var i = 0;
    while (i < topics.length) {
      list = list +
        `<tr>
          <td class="tg-0lax">${topics[i].date} </td>
          <td class="tg-0lax">${topics[i].time}</td>
          <td class="tg-0lax"> <a href='/hero/hero_management?id=${topics[i].id}'"> ${topics[i].name} </a></td>
        </tr>`;
      i = i + 1;
    }
    // list = list+'</tr>';
    return list;
  }
}
