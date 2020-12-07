module.exports = {
  HTML: function (header, footer, list, queryData_email) {
    return `
      <!doctype html>
      <html>
      <head>
      <title>경기매칭</title>
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
                      <td id="title"> 경기매칭</td>
                      <td class="tg-c3ow" colspan="3"> <button type="button" id="btn2"  onclick="location.href='/matching/matching_make?email=${queryData_email}'">만들기</button> </td>
                  </th>
              </tr>
              </table>
      
              
              <form action="/matching_search?email=${queryData_email}" method="post">
                <table class="matching-list" style="width: 100%; height: 100%; text-align: center;">
                  <thead>
                    <th class="tg-c3ow" align="center">
                      <div>제목</div>
                    </th>
      
                    <th class="tg-c3ow" align="center" style="width: 8em">
                      <input type="date" id="date" name="date">
                    </th>
      
                    <th class="tg-c3ow" align="center" style="width: 8em">
                      <input type="time" id="time" name="time">
                    </th>
      
                    <th class="tg-c3ow" colspan="4" align="center"> 
                      <div id="matching-search"> <input type="submit"> </div> 
                    </th>
                  </thead>
                
                  <tbody>
                    ${list}
                  </tbody>
                </table>
              </form>	
          </div>
          
          <!--footer-->
          ${footer}
        </div>	
    </body>
    
    </html>
    `;

  },
  // 데이터베이스 matching 테이블 
  list: function (topics, queryData_email) {
    var list = '';
    var i = 0;
    while (i < topics.length) {
      list = list +
        `<tr>
          <td class="tg-0lax"> <a href='/matching/matching_management?id=${topics[i].id}&email=${queryData_email}'"> ${topics[i].title} </a></td>
          <td class="tg-0lax">${topics[i].date} </td>
          <td class="tg-0lax">${topics[i].time}</td>
          <td class="tg-0lax">${topics[i].team}</td>
        </tr>`;
      i = i + 1;
    }
    return list;
  }
}
