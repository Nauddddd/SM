const { simplify } = require('mathjs')


module.exports = function(req, res) {
	var q = req.body.q;
	try{
		var rs = simplify(q);
	}catch(e){
		rs="No result";
	}
	//var rs = rationalize(q);
	res.render('dongianbieuthuc', {
		ketqua: rs
	});
}