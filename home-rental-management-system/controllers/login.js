var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	if(req.body.usertype == "Admin"){
		res.render('admin/index');
	}
	else if(req.body.usertype == "Manager"){
        res.render('manager/index');
	}
	else if(req.body.usertype == "House Provider"){
        res.render('houseprovider/index');
	}
	else if(req.body.usertype == "Customer"){
		res.render('customer/index');
	}else{
		res.send('invalid username/password');
	}
});

module.exports = router;