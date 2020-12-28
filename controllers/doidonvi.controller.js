const { evaluate } = require('mathjs')


module.exports = function(req, res) {
	var q = req.body.q+req.body.donvitu+" to "+req.body.donvitoi;
	try{
		var rs = evaluate(q);
	}catch(e){
		rs="No result";
	}
	//var rs = evaluate(q);
	res.render('doidonvi', {
		ketqua: rs
	});
}