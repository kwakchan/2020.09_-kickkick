module.exports = {
	header: function() {
		return`

			<style type="text/css">
				#header{
					background: white;
					font-family: HY동녘B;

					display: flex;
					justify-content: center;
				}
			</style>
			<script type="text/javascrpt">
				function goBack(){
					window.history.back();
				}
			</script>	
			
			<div data-role="header" data-position="fixed" id="header">
				<table>
					<tr>
						<td> <button onClick="history.back(); return false;"> <img src="http://localhost:3000/img/back.png" width="25em" height="25em"> </button> </td>
						<td> <img src="http://localhost:3000/img/logotxt.png" width="200em" height="100em"> </td>
					</tr>
				</table>
			</div>

		`;
	}
}