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

			<div data-role="header" data-position="fixed" id="header">
				<img data-role="button" src="http://localhost:3000/img/logotxt.png" width="200em" height="100em">
			</div>
		`;
	}
}