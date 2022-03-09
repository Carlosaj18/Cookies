const { validationResult } = require('express-validator');

const controllerProducts = {    

    index: function(req, res){
        res.render('index');
    }, 
    create: function(req, res){ 

        const resultValidation = validationResult(req);

		if(resultValidation.errors.length > 0) {
            console.log(req.body.color);
			return res.render('index', 
							  {errors: resultValidation.mapped(),
							   oldData: req.body});
		} else {

            req.session.nombre = req.body.nombre
            req.session.color = req.body.color
            req.session.email = req.body.email
            req.session.edad = req.body.edad

            res.cookie('cookieColor', req.body.color);
            
            let cookieColor = req.cookies.cookieColor

            console.log("esta es el color de la cookie" + cookieColor);
            
            let usuario = {
                nombre: req.session.nombre, 
                color: req.session.color,
                email: req.session.email, 
                edad: req.session.edad
            }
            return res.render('index', {usuario: usuario, cookieColor: cookieColor});
        }
    }
}

module.exports = controllerProducts