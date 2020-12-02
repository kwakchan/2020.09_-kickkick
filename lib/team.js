module.exports = {
   HTML: function (header, footer, queryData_email, users, image_name) {
      return `
      <!DOCTYPE html>
      <html>
      <meta charset="utf-8">

      <head>
         <title>팀</title>
         <meta name="viewport" content="width=device-width, initial-scale=1"> 
         <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
         <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
   
         <style type="text/css">
            #table{
               text-align: center;
               padding: 20px;
               margin: 0px auto;
               width: 100%;
            }

            .legend{
               text-align: left;
               color: black;
            }

            .fieldset{
               border: 2px solid gray;
               padding: 5px;
               margin: 5px auto; 
               height: 40%;
               
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
         } 
      </style>
      </head>

      <body>
         <div data-role="page" id="bar">	
            <!--header-->
            ${header}

            <!--content-->
            <div data-role="content" id="content"> 
               <!--팀소개-->
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
                           <div class="circle">
                              <img src="http://localhost:3000/uploads/${image_name}" class="team1" width="100em" height="100em"/>
                           </div>
                        </td>
                     </tr>

                     <tr>
                        <td>
                           <div class="text">${users[0].team}</div>
                        </td>
                        
                        <td>
                           <div class="text">${users[0].name}</div>
                        </td>

                        <td>
                        <a href="/team/team_mymember?email=${queryData_email}">
                           <div class="circle" style="font-weight: bolder; font-size: 18px;">팀원목록</div>
                        </a>
                        </td>

                     </tr>
                  </table>
               </fieldset>
               

               <!--팀관리-->
               <fieldset class="fieldset">
                  <legend class="legend" style="font-weight: bold; font-size: 2rem">팀 관리</legend>
                  <table id="table">

                     <tr>
                        <td>
                           <a href="/team/team_make?email=${queryData_email}"> 
                              <div class="circle" style="font-weight: bolder; font-size: 18px;">팀만들기</div> 
                           </a>
                        </td>

                        <td>
                           <a href="/team/team_register?email=${queryData_email}">
                              <div class="circle" style="font-weight: bolder; font-size: 18px;">팀가입</div>
                           </a> 
                        </td>

                        <td>
                           <a href="/team/team_list?email=${queryData_email}">
                              <div class="circle" style="font-weight: bolder; font-size: 18px;">팀목록</div>
                           </a>
                        </td>
                     </tr>
                  </table>
               </fieldset>
            </div>
            
            <!--footer-->
            ${footer}
         </div>   
      </body>
      </html>
      `;
   }
}