module.exports = {
  HTML: function (header, footer, users_team, list, team_image, queryData_email) {
    return `
        <!doctype html>
        <html>
        <head>
        <title>팀원 목록</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

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
          
          #title{
            font-size: 1.5rem;
            
            font-family: 'HY동녘B';
            text-align: left;
            font-weight: bold;

            margin: 20px;
            border: 10px;
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
                
                <form action="/team_upload?email=${queryData_email}" method="post" enctype="multipart/form-data">
                  <tr align="center"> 
                    <td> <input type="file" id="click_btn2" name='userfile2' /> </td> 
                    <td> <input type="submit" id="click_btn3" style="border:1px solid DodgerBlue;" /> </td>
                  </tr>   
                </form>

                <table class="matching-create" style="width: 100%; height: 20%; text-align: center;">
                  <tr>
                    <th class="tg-c3ow" colspan="2" rowspan="2"> 
                      <td><img src="http://localhost:3000/uploads/${team_image}" id="matching-logo" weight='120px' height='120px'> </td>
                      <td id="title"> ${users_team} </td>
                    </th>
                  </tr>
              
                  
                  <div data-role="content" id="content">
                    <table border=1 style="width: 90%; height: 90%; margin: auto;">          
                    ${list}
                    </table>
                  </div>   
                </table>   
              </div>
            
            <!--footer-->
            ${footer}
          </div>   
      </body>
      
      </html>
      `;

  },
  // team table
  list: function (topics) {
    var list2 = '';
    var i = 0;
    
      if(topics.length%2==0) {
        while (i < topics.length) {
          list2 = list2 +
          `<tr>
            <!--1번칸-->
            <td><table class="player"> 
                <!--이미지-->
                <tr> <td colspan="2"> <div class="circle"> <img src="http://localhost:3000/uploads/${topics[i].image}" width="100em" height="100em"> </div> </td> </tr>
                <!--이름-->
                <tr> <td colspan="2"> ${topics[i].name} </td> </tr>
                <!--포지션-->
                <tr> <td colspan="2"> 포지션: ${topics[i].position} </td> </tr>
              </table>   
            </td>

            <!--2번칸-->
            <td><table class="player"> 
                <!--이미지-->
                <tr> <td colspan="2"> <div class="circle"> <img src="http://localhost:3000/uploads/${topics[i+1].image}" width="100em" height="100em"> </div> </td> </tr>
                <!--이름-->
                <tr> <td colspan="2"> ${topics[i+1].name} </td> </tr>
                <!--포지션-->
                <tr> <td colspan="2"> 포지션: ${topics[i+1].position} </td> </tr>
              </table>   
            </td>
          </tr>`;
          i = i + 2;
        }
      } else {
        while (i < topics.length-1) {
          list2 = list2 +
          `<tr>
            <!--1번칸-->
            <td><table class="player"> 
                <!--이미지-->
                <tr> <td colspan="2"> <div class="circle"> <img src="http://localhost:3000/uploads/${topics[i].image}" width="100em" height="100em"></div> </td> </tr>
                <!--이름-->
                <tr> <td colspan="2"> ${topics[i].name} </td> </tr>
                <!--포지션-->
                <tr> <td colspan="2"> 포지션: ${topics[i].position} </td> </tr>
              </table>   
            </td>
            
            <!--2번칸-->
            <td><table class="player"> 
                <!--이미지-->
                <tr> <td colspan="2"> <div class="circle"> <img src="http://localhost:3000/uploads/${topics[i+1].image}" width="100em" height="100em"></div> </td> </tr>
                <!--이름-->
                <tr> <td colspan="2"> ${topics[i+1].name} </td> </tr>
                <!--포지션-->
                <tr> <td colspan="2"> 포지션: ${topics[i+1].position} </td> </tr>
              </table>   
            </td>
            
          </tr>`;
          i = i + 2;
        }
        list2 = list2 +
        `<tr>
            <!--1번칸-->
            <td><table class="player"> 
                <!--이미지-->
                <tr> <td colspan="2"> <div class="circle"> <img src="http://localhost:3000/uploads/${topics[i].image}" width="100em" height="100em"></div> </td> </tr>
                <!--이름-->
                <tr> <td colspan="2"> ${topics[i].name} </td> </tr>
                <!--포지션-->
                <tr> <td colspan="2"> 포지션: ${topics[i].position} </td> </tr>
              </table>   
            </td>
        </tr>`;

      }
      
    return list2;
  }
}