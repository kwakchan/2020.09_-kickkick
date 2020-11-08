module.exports = {
   HTML: function (topics) {
     return `
      <!DOCTYPE html>
      <html>
      <meta charset="utf-8">

      <head>
         <title>유저창</title>
         <meta name="viewport" content="width=device-width, initial-scale=1"> 
         <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
         <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>


         <!--header와 footer를 불러오는 script문 -->
         <script type="text/javascript" src="includeHtml.js"></script>
         <script type="text/javascript">
            function headerCompleted() {
               
            }
            function footerCompleted() {
               
            }
         </script>
         <!--header와 footer를 불러오는 script문 /-->

         <style>
            #click_btn{
               margin:0 auto; 
               padding:5px 20px; 
               
               color: skyblue; 
               width:50px; 
               cursor:pointer; 
               border-radius: 30px;

               border:1px solid; 
               float: right; 
               text-align: center;
            }

            #click_btn2{
               width: 12.00em;
               height: 2.50em;

               background: skyblue;
               color: white;
               font-size:1.250em;
               line-height: 3.125em;

               border: solid 2px grey;
               margin: 10px auto;
               border-radius: 30px;

               display: flex;
               justify-content: center;
            }

            #click_btn3{
               width: 12.00em;
               height: 2.50em;

               background: white;
               color: skyblue;
               font-size:1.250em;
               line-height: 3.125em;

               border: solid 2px grey;
               margin: 10px auto;
               border-radius: 30px;

               display: flex;
               justify-content: center;
            }

            #img { 
               text-align: center; 
            }

            .text { 
               text-align: center;
               font-weight: bold;
            }
            table {
               border-collapse: separate;
               qborder-spacing: 0 10px
            }
            td{
               border-bottom: solid 1px blue;
            }

            .switcher {position:relative;width:198px;height:45px;border-radius:25px;} 
            .switcher input { -webkit-appearance: none; appearance: none; position: relative; width: 192px; height: 42px; border-radius: 25px; background-color: gray; border:1px solid #fff; } 
            .switcher input:before, 
            .switcher input:after { z-index: 2; position: absolute; top: 50%; color: #fff; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -o-transform: translateY(-50%); transform: translateY(-50%); } 
            /*토글 좌측 텍스트*/ 
            .switcher input:before { content: attr(data-title1); left: 30px; color: #0ab1a9; font-size: 16px; -webkit-transition: color 0.5s, left 0.5s; -moz-transition: color 0.5s, left 0.5s; -ms-transition: color 0.5s, left 0.5s; -o-transition: color 0.5s, left 0.5s; transition: color 0.5s, left 0.5s; } 
            /*토글 우측 텍스트*/ 
            .switcher input:after { content: attr(data-title2); right: 30px; color: #0ab1a9; font-size: 16px; -webkit-transition: color 0.5s, right 0.5s; -moz-transition: color 0.5s, right 0.5s; -ms-transition: color 0.5s, right 0.5s; -o-transition: color 0.5s, right 0.5s; transition: color 0.5s, right 0.5s; } 
            /*토클 바 (head)*/ 
            .switcher label {z-index:1;position:absolute;top:1px;bottom:1px;border-radius:25px;background-color: #fff;} 
            /*토글 좌측 텍스트 활성화시*/ 
            .switcher input:checked:before { color: white; left:38px; font-weight: 500; -webkit-transition: color 0.5s 0.2s, left 0.5s 0.2s; -moz-transition: color 0.5s 0.2s, left 0.5s 0.2s; -ms-transition: color 0.5s 0.2s, left 0.5s 0.2s; -o-transition: color 0.5s 0.2s, left 0.5s 0.2s; transition: color 0.5s 0.2s, left 0.5s 0.2s; } /*토글 우측 텍스트 비활성화시*/ 
            .switcher input:checked:after {color: white;} 
            /*토글바가 좌측으로 이동시*/ 
            .switcher input:checked + label { background-color: skyblue; left: 0; right: 45%; -webkit-transition: left 0.5s, right 0.4s 0.2s; -moz-transition: left 0.5s, right 0.4s 0.2s; -ms-transition: left 0.5s, right 0.4s 0.2s; -o-transition: left 0.5s, right 0.4s 0.2s; transition: left 0.5s, right 0.4s 0.2s; } 
            /*토글 좌측 텍스트 비활성화시*/ 
            .switcher input:not(:checked):before {color: white;} 
            /*토글 우측 텍스트 활성화시*/ 
            .switcher input:not(:checked):after { color: white; right:38px; font-weight: 500; -webkit-transition: color 0.5s 0.2s, right 0.5s 0.2s; -moz-transition: color 0.5s 0.2s, right 0.5s 0.2s; -ms-transition: color 0.5s 0.2s, right 0.5s 0.2s; -o-transition: color 0.5s 0.2s, right 0.5s 0.2s; transition: color 0.5s 0.2s, right 0.5s 0.2s; } 
            /*토글바가 우측 이동시*/
            .switcher input:not(:checked) + label { background-color: skyblue; left: 45%; right: 0; -webkit-transition: left 0.4s 0.2s, right 0.5s; -moz-transition:left 0.4s 0.2s, right 0.5s; -ms-transition:left 0.4s 0.2s, right 0.5s; -o-transition:left 0.4s 0.2s, right 0.5s; transition:left 0.4s 0.2s, right 0.5s; }


         </style>


         <script> 
            $('#click_btn').click(function(){
               alert("저장 되었습니다.");
            });
         </script>

      </head>

      <body>
         <div data-role="page" id="bar">   
            
            <!--header-->
            <include-html target="header.html" completed="headerCompleted"></include-html>

            
            <!--content-->
            <div data-role="content" id="content">
               <div id="img">
                  <!-- <img src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/user.png" align="center" height="100px" align="center" alt="유저 이미지" title="유저 이미지"> -->
               </div>

            </br>

            <div id="click_btn2" style="border:1px solid DodgerBlue;">프로필 사진 변경</div>
         </br></br>

         <table style="width: 100%; height: 100%;">
            <tr>
               <td class="text">이름</td>
               <td class="text">${topics[0].name}</td>
            </tr>

            <tr>
               <td class="text">나이</td>
               <td class="text">${topics[0].age}</td>
            </tr>
         
            <tr>
               <td class="text">소속</td>
               <td class="text">${topics[0].team}</td>
            </tr>      
         
            <tr>
               <td class="text">포지션</td>
               <td class="text">${topics[0].position}</td>
            </tr>

            <tr>
               <td class="text">키</td>
               <td class="text">${topics[0].height}</td>
            </tr>

            <tr>
               <td class="text">몸무게</td>
               <td class="text">${topics[0].weight}</td>
            </tr>
            

            <tr>
               <td> <p class="text">알림</td>
                  <td colspan="2" align="center"> <div class="switcher"> <input type="checkbox" id="switcher-1" data-title1="on" data-title2="off" /> <label for="switcher-1"></label> </div></td>
               </tr>

               <tr>
                  <td> <p class="text">채팅</td> </td>
                     <td colspan="2" align="center"><div class="switcher"> <input type="checkbox" id="switcher-1" data-title1="on" data-title2="off" /> <label for="switcher-1"></label> </div></td>
                  </tr>
               </table>

               <div id="click_btn3" style="border:1px solid DodgerBlue;">저장</div>
               <div id="click_btn2" style="border:1px solid DodgerBlue;">로그아웃</div>


            </div>   
            
            <!--footer-->
            <include-html target="footer.html" completed="footerCompleted"></include-html>   
         </div> 
         <script>includeHtml();</script>  <!-- includeHtml.js를 호출 -->
      </body>
      </html>
      `;
      }
   }