const { rationalize } = require('mathjs')


module.exports = function(req, res) {
	var q = req.body.q;
	try{
		var rs = rationalize(q);
	}catch(e){
		rs="No result";
	}
	//var rs = rationalize(q);
	res.render('hoplihoabieuthuc', {
		ketqua: rs
	});
}