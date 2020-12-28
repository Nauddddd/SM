const { pow } = require('mathjs')
const { sqrt } = require('mathjs')
module.exports = function(req, res) {
	var q = req.body.q;
	q = parseInt(q);
	if(q>72||q<-72) rs="NaN";
	else try{
		if(q>=0){
			var rs = 1/sqrt(5)*(pow(((1+sqrt(5))/2),q)-pow(((1-sqrt(5))/2),q));
			rs = parseInt(rs);
		} else{
			q=q-2*q;
			var rs = 1/sqrt(5)*(pow(((1+sqrt(5))/2),q)-pow(((1-sqrt(5))/2),q));
			rs = parseInt(rs)*pow(-1,q+1);
		}
	}catch(e){
		rs="No result";
	}
	if(rs=="NaN") rs="No result";
	res.render('dayfibo', {
		ketqua: rs
	});
}