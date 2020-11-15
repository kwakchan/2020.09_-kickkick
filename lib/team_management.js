var team_management = `
<!DOCTYPE HTML>
<html>
<meta charset="utf-8">	
<head>
	<title>팀-선수관리</title>
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
	
	<!--header와 footer를 불러오는 script문 -->
   <script type="text/javascript" src="includeHtml.js"></script>
   <script type="text/javascript">
      function headerCompleted() {
         
      }
      function footerCompleted() {
         
      }
   </script>
   <!--header와 footer를 불러오는 script문 /-->


	<style type="text/css">
	
		
		.player{
			text-align: center;
		}

		.circle{
			background-color:#0003;
			width:100px; height:100px;
	
			border: 10px auto;
			margin: 10px auto;
			border-radius:75px;
			text-align:center;
			
			font-size:12px; 
			color: #black;
			vertical-align:middle;
			line-height:100px;
		}

		.player{
 			width: 35%; height: 30%; margin: auto;
		}

		#btn2 {
			width: 80px; height: 45px; margin: auto;
			font-size: 50%;
			font-family: 'Nanum Gothic';
			color: gray;
			line-height: 50px;
			text-align: center;
			background: white;
			border: solid 2px grey;
			border-radius: 30px;
		}

	</style>
</head>

<body>
	<div data-role="page" id="bar">	
	 	<!--header-->
		 <include-html target="header.html" completed="headerCompleted"></include-html>

		<!--content-->
	    <div data-role="content" id="content">
	    	<table border=1 style="width: 90%; height: 90%; margin: auto;">
	    		
	    		<tr>
	    			<!--1번칸-->
	    			<td>
	    				<table class="player"> 
	    					<!--이미지-->
	    					<tr>
	    						<td colspan="2">
	    							<div class="circle">이미지</div>
	    						</td>
	    					</tr>
	    					<!--이름-->
	    					<tr>
	    						<td colspan="2">
	    							<p>김민수</p>
	    						</td>
	    					</tr>
	    					<!--포지션-->
	    					<tr>
	    						<td colspan="2">
	    							<p>포지션: PW</p>
	    						</td>
	    					</tr>
	    					<!--버튼-->	
	    					<tr>
	    						<td>
	    							<div id="btn2">선택</div>
	    						</td>
	    						<td>
	    							<div id="btn2">수정</div>
	    						</td>
	    					</tr>
	    				</table>	
	    			</td>

	    			<!--2번칸-->
	    			<td>
	    				<table class="player"> 
	    					<!--이미지-->
	    					<tr>
	    						<td colspan="2">
	    							<div class="circle">이미지</div>
	    						</td>
	    					</tr>
	    					<!--이름-->
	    					<tr>
	    						<td colspan="2">
	    							<p>김민수</p>
	    						</td>
	    					</tr>
	    					<!--포지션-->
	    					<tr>
	    						<td colspan="2">
	    							<p>포지션: PW</p>
	    						</td>
	    					</tr>
	    					<!--버튼-->	
	    					<tr>
	    						<td>
	    							<div id="btn2">선택</div>
	    						</td>
	    						<td>
	    							<div id="btn2">수정</div>
	    						</td>
	    					</tr>
	    				</table>
	    			</td>
	    		</tr>

	    		<tr>
	    			<!--3번칸-->
	    			<td>
	    				<table class="player"> 
	    					<!--이미지-->
	    					<tr>
	    						<td colspan="2">
	    							<div class="circle">이미지</div>
	    						</td>
	    					</tr>
	    					<!--이름-->
	    					<tr>
	    						<td colspan="2">
	    							<p>김민수</p>
	    						</td>
	    					</tr>
	    					<!--포지션-->
	    					<tr>
	    						<td colspan="2">
	    							<p>포지션: PW</p>
	    						</td>
	    					</tr>
	    					<!--버튼-->	
	    					<tr>
	    						<td>
	    							<div id="btn2">선택</div>
	    						</td>
	    						<td>
	    							<div id="btn2">수정</div>
	    						</td>
	    					</tr>
	    				</table>
	    			</td>

	    			<!--4번칸-->
	    			<td>
	    				<table class="player"> 
	    					<!--이미지-->
	    					<tr>
	    						<td colspan="2">
	    							<div class="circle">이미지</div>
	    						</td>
	    					</tr>
	    					<!--이름-->
	    					<tr>
	    						<td colspan="2">
	    							<p>김민수</p>
	    						</td>
	    					</tr>
	    					<!--포지션-->
	    					<tr>
	    						<td colspan="2">
	    							<p>포지션: PW</p>
	    						</td>
	    					</tr>
	    					<!--버튼-->	
	    					<tr>
	    						<td>
	    							<div id="btn2">선택</div>
	    						</td>
	    						<td>
	    							<div id="btn2">수정</div>
	    						</td>
	    					</tr>
	    				</table>
	    			</td>
	    		</tr>

	    		<tr>
	    			<td>
	    				<table class="player"> 
	    					<!--이미지-->
	    					<tr>
	    						<td colspan="2">
	    							<div class="circle">이미지</div>
	    						</td>
	    					</tr>
	    					<!--이름-->
	    					<tr>
	    						<td colspan="2">
	    							<p>김민수</p>
	    						</td>
	    					</tr>
	    					<!--포지션-->
	    					<tr>
	    						<td colspan="2">
	    							<p>포지션: PW</p>
	    						</td>
	    					</tr>
	    					<!--버튼-->	
	    					<tr>
	    						<td>
	    							<div id="btn2">선택</div>
	    						</td>
	    						<td>
	    							<div id="btn2">수정</div>
	    						</td>
	    					</tr>
	    				</table>
	    			</td>

	    			<td>
	    				<table class="player"> 
	    					<!--이미지-->
	    					<tr>
	    						<td colspan="2">
	    							<div class="circle">이미지</div>
	    						</td>
	    					</tr>
	    					<!--이름-->
	    					<tr>
	    						<td colspan="2">
	    							<p>김민수</p>
	    						</td>
	    					</tr>
	    					<!--포지션-->
	    					<tr>
	    						<td colspan="2">
	    							<p>포지션: PW</p>
	    						</td>
	    					</tr>
	    					<!--버튼-->	
	    					<tr>
	    						<td>
	    							<div id="btn2">선택</div>
	    						</td>
	    						<td>
	    							<div id="btn2">수정</div>
	    						</td>
	    					</tr>
	    				</table>
	    			</td>
	    		</tr>	
	    	</table>
	    </div>	
	    <!--footer-->
	   <include-html target="footer.html" completed="footerCompleted"></include-html>

	 	
	</div>    
</body>

<script>includeHtml();</script>
</html>
`;

module.exports = team_management;