var team = `
<!DOCTYPE html>
<html>
<meta charset="utf-8">

<head>
   <title>팀</title>
   <meta name="viewport" content="width=device-width, initial-scale=1"> 
   <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
   

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

      #table{
         text-align: center;
         padding: 20px;
         margin: 20px auto;
         /* border-spacing: 50px; 테이블 위아래 간격 늘리기*/
         width: 100%;
      }

      .legend{
         text-align: left;
         color: black;
      }

      .fieldset{
         border: 2px solid gray;
         padding: 10px;
         margin: 20px auto;
         
         height: 50%;
         
         font-size:20px;
         font-family: 'Nanum Gothic';
         color: gray;
         line-height: 50px;
         text-align: center;
         background: white;
         border-radius: 75px;
      }
      .team{
         border: 2px solid gray;
         padding: 10px;
         margin: 20px auto;
         width: 80%;
         height: 50%;
         
         font-size:20px;
         font-family: 'Nanum Gothic';
         color: gray;
         line-height: 50px;
         text-align: center;
         background: white;
         
         border-radius: 30px;
      }
      .circle{
         background-color:#0003;
         width:100px; height:100px;
         padding: 6px;
         border: 100px auto;
         margin: 10px auto;
         border-radius:75px;
         text-align:center;
         
         font-size:12px; 
         color: #black;
         vertical-align:middle;
         line-height:100px;
         color: black;
         
      }
      .team1 {

         width: 100%;
         height: 9em;
         
         
      }

      form {
         padding-top: 10%;
      }
   } 
</style>
</head>

<body>
   <!--header-->
   <include-html target="header.html" completed="headerCompleted"></include-html>

   <!--content-->
   <div data-role="content" id="content"> 
      <form>
         <fieldset class="fieldset">
            <legend class="legend" style="font-weight: bold; font-size: 2rem">팀 소개</legend>
            <table id="table">
               <tr>
                  <td>
                     <div class="circle">
                        <img src="https://github.com/kimxminsu/kickkick/blob/minsu/app/img/uniform.png?raw=true" class="team1">
                     </div> 

                  </td>
                  <td>
                     <div class="circle">원 만들기2</div>
                  </td>
               </tr>

               <tr>
                  <td>
                     <div class="text">FC바르게살자</div>
                  </td>
                  <td>
                     <div class="text">프로필</div>
                  </td>
               </tr>

            </table>
         </fieldset>
      </form>
         <!--팀관리-->
         <fieldset class="fieldset">
            <legend class="legend" style="font-weight: bold; font-size: 2rem">팀 관리</legend>
            <table id="table">

               <tr>
                  <td>
                     <div class="circle" style="font-weight: bolder; font-size: 18px;">포메이션</div> 
                  </td>
                  <td>
                     <div class="circle" style="font-weight: bolder; font-size: 18px; ">선수관리</div>
                  </td>
               </tr>
            </table>
         </fieldset>
      </div>
   </form>
      <!--footer-->
      <include-html target="footer.html" completed="footerCompleted"></include-html>
      <script>includeHtml();</script>  <!-- includeHtml.js를 호출 -->
   </body>
 </html>
`;

module.exports = team;