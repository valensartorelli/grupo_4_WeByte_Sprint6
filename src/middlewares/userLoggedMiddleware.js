let db = require('../database/models');
const User = db.User;

function userLoggedMiddleware(req, res, next) {

	res.locals.isLogged = false;

	// let emailInCookie = req.cookies.userEmail;
	// let userFromCookie = User.findOne({where: {email: req.body.email}}, emailInCookie);
	// if (userFromCookie) {
	// 	req.session.userLogged = userFromCookie;
	// }
	// if (req.session.userLogged) {
	// 	res.locals.isLogged = true;
	// 	res.locals.userLogged = req.session.userLogged;
	// }
   //console.log("locals 1: " + res.locals.isLogged);
   if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;

    //Paso las variables para que esten disponibles en todas las vistas
    res.locals.userLogged = req.session.userLogged;
   
   console.log("userLogged: " + res.locals.userLogged.id);
       
   }
	next();
}

module.exports = userLoggedMiddleware;