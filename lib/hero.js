module.exports = {
	HTML: function (header, footer, list, queryData_email) {
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
					font-size: 0.5em;
					font-family: '돋움';
					color: white;
					text-align: center;
					background: gray;
					border: solid 2px grey;
				}

			</style>
		</head>

		<body>
		<div data-role="page" id="bar">	
			<!--header-->
			${header}
			
			<!--content-->
			<div data-role="content" id="content"> 
				<div style="width: 100%; height: 100%;">   
					<table class="matching-create" style="width: 100%; height: 20%; text-align: center;">
						<tr>
							<th class="tg-c3ow" colspan="2" rowspan="2"> <img src="http://localhost:3000/img/player2.png" id="matching-logo" weight='120px' height='120px'> </th>
							<th class="tg-c3ow" colspan="6">  
								<td id="title"> 용병구함</td>
								<td class="tg-c3ow" colspan="3"> <button type="button" id="btn2"  onclick="location.href='/hero/hero_make?email=${queryData_email}'">만들기</button> </td>
							</th>
						</tr>
					</table>

					<form action="/hero_search?email=${queryData_email}" method="post">
					  <table class="matching-list" style="width: 100%; height: 100%; text-align: center;">
						<thead>
							<th align="center" style="width: 8em">
								<div>제목</div>
							</th>

							<th align="center" style="width: 4em">
								<input type="date" id="date" name="date">
							</th>

							<th align="center" style="width: 4em">
								<input type="time" id="time" name="time">
							</th>

							<th colspan="4" align="center"> 
								<div id="matching-search"> <input type="submit"> </div> 
							</th>
						</thead>
					
						<tbody>
							${list}
						</tbody>
					  </table>
					</form>		
				</div>
			</div>	
			
			<!--footer-->
			${footer}	
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
				<td class="tg-0lax">${topics[i].title} </td>	
				<td class="tg-0lax">${topics[i].date} </td>
				<td class="tg-0lax">${topics[i].time}</td>
				<td class="tg-0lax"> <a href='/hero/hero_management?id=${topics[i].id}'"> ${topics[i].name} </a></td>
				</tr>`;
			i = i + 1;
		}
	 	return list;
	}
	// ,
	// // Date 출력
	// date: function(topics) {
	// 	var date = new Array(topics.length);
	// 	var i=0;
	// 	while (i < topics.length) {
	// 		date[i] = topics[i].date
	// 		i = i + 1;	
	// 	}	
	// 	date2 = date.filter(function(n){
	// 		return n == '2020-12-25';
	// 	});
	// 	return date2;	
	// }
}
