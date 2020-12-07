module.exports = {
  HTML: function (queryData_email, dup) {
    return `
      <form action="/team/team_make_process?email=${queryData_email}" method="post">                                
        <input type="text" name="team_name" placeholder="team_name">                  
        <input type="text" name="area" placeholder="area">   
        <p>${dup}</p>                                 
        <input type="submit">                  
      </form>  
      `
  }
}      