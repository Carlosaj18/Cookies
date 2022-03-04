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
            console.log(req.body.color);
            req.session.email = req.body.email
            req.session.edad = req.body.edad

            let usuario = {
                nombre: req.session.nombre, 
                color: req.session.color,
                email: req.session.email, 
                edad: req.session.edad
            }
            return res.render('index', {usuario})
        }
    }
}

module.exports = controllerProducts