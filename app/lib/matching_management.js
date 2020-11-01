module.exports = {
  HTML:function(title, date, time, content, queryData_id){ 
    return `
    <!DOCTYPE html>
    <html>
    <meta charset="utf-8">

    <head>
      <title>경기매칭-관리</title>
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

      <div id="pop-up">
        <a href="/matching/matching_management/update?id=${queryData_id}">
        <img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EB%A7%A4%EC%B9%AD.png" height="65px" width="65px">
        </a>
        <a href="/matching/matching_management/delete_process?id=${queryData_id}">
        <img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EB%A7%A4%EC%B9%AD.png" height="65px" width="65px"> 
        </a>
        <table id="table">           
          <form action="#.php">
            <tr>
              <td colspan="2">제목</td>
              <td colspan="2"> <input type="text" class=form value="${title}"> </td>
            </tr>

            <tr>
              <td colspan="2">날짜</td>
              <td colspan="2"> <input type="date" class=form value="${date}" readonly> </td>
            </tr>

            <tr>
              <td colspan="2">시간</td>
              <td colspan="2"> <input type="time" class=form value="${time}" readonly> </td>
            </tr>

            <tr>
              <td colspan="2">내용</td>
              <td colspan="2"> <input type="text" class=form value="${content}" readonly> </td>
            </tr>

            <tr>
              <td colspan="4"> 
                <div id="submit"> <input type="submit" value="연락하기"> </div> 
              </td>
            </tr> 

          </form> 
        </table>

      </div>


    </body>
    </html>
    `;
  }
}