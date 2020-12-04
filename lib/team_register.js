module.exports = {
  HTML: function (header, footer, queryData_email, list) {
     return `
      <!doctype html>
      <html>
      <head>
        <title>팀 목록</title>
        <meta charset="utf-8">
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
          ${header}
              
          <!--content-->
          <div data-role="content" id="content">
            <div style="width: 100%; height: 100%;">   
              <table class="matching-create" style="width: 100%; height: 20%; text-align: center;">
                <tr>
                    <th class="tg-c3ow" colspan="2" rowspan="2"> <img src="http://localhost:3000/img/player1.png" id="matching-logo" weight='120px' height='120px'> </th>
                    <th class="tg-c3ow" colspan="6">  
                        <td id="title"> 팀가입하기</td>
                        
                    </th>
                </tr>
              </table>

              <form action="/team/team_register_process?email=${queryData_email}" method="post">                                
                <input type="text" name="team_name" placeholder="team_name">                                          
                <input type="submit">                  
              </form>
        
              <form action="/team_list?email=${queryData_email}" method="post">
                  <table class="matching-list" style="width: 100%; height: 100%; text-align: center;">
                    <thead>
                      <th class="tg-c3ow" align="center">
                        <div>팀 이름</div>
                      </th>

                      <th class="tg-c3ow" align="center">
                        <div>지역</div>
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
      `
  },
  list: function (topics) {
    var list = '';
    var i = 0;
    while (i < topics.length) {
      list = list +
        `<tr>
          <td class="tg-0lax"> <a href='/team/team_list?id=${topics[i].id}'"> ${topics[i].team_name} </td>
          <td class="tg-0lax">${topics[i].area} </td>
        </tr>`;
      i = i + 1;
    }
    return list;
  }
}      