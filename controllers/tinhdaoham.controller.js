const { derivative } = require('mathjs')


module.exports = function(req, res) {
	var q = req.body.q;
	try{
		var rs = derivative(q, 'x');
	}catch(e){
		rs="No result";
	}
	//var rs = derivative(q, 'x');
	res.render('tinhdaoham', {
		ketqua: rs
	});
}