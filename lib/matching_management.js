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
          width: 80%;
          height: 70%;
          margin: 40% auto;

          font-size:15px;
          font-family: 'Nanum Gothic';
          color: white;
          background-color: lightgray;
          line-height: 50px;
          border: solid 2px grey;
          border-radius: 40px;    
        }

        #table2{
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
      <form action="#.php" id="pop-up">  
        <table id="table2">
          <tr>
            <td>
              상세정보
            </td>
            <td>
                <a href="/matching/matching_management/update?id=${queryData_id}"> //수정하기
                  <img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%88%98%EC%A0%95.png" height="30px" width="30px">
                </a>
            </td>
            <td>
                <a href="/matching/matching_management/delete_process?id=${queryData_id}"> //삭제하기
                  <img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%82%AD%EC%A0%9C.png" height="30px" width="30px"> 
                </a>
            </td>
          </tr>
        </table>

        <table id="table2">           
            <tr>
              <td colspan="2">제목</td>
              <td colspan="2"> <input type="text" class=form value="${title}" readonly> </td>
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
                <input type="submit" value="연락하기" id="submit"> 
              </td>
            </tr> 
        </table>
      </form>   
    


    </body>
    </html>
  `;
  }
}