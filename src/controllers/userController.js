const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const User = db.User;
const Rol = db.Rol;


//const { User, Address } = require('../database/models');

const userController = {

    list: (req, res) => {
        User.findAll()
        .then(users => {
            res.render('users/users', {users})
        });
    },
    detail: (req, res) =>{
        console.log('entre a detalle de usuario')
        console.log('----------------------------')
        let usertId = req.params.id;
        User.findByPk(usertId,
            {
                include : ['rol']
            })
            .then(users => {
               // res.json(product)
                res.render('users/userDetail', {users});
            });
    },
    
    add: (req, res) => {
        Rol.findAll()
        .then(roles => {
            res.render('users/register', {roles})
        });
    },
    create: async (req, res) =>{
        console.log('entre en el Create user')
        console.log('----------------------------')
        // const resultValidation = validationResult(req);
        // if (resultValidation.errors.length > 0) {
        //     return res.render('users/register', {
        //         errors: resultValidation.mapped(),
        //         oldData: req.body
        //     });
        // }
        console.log('---------------------- antes de buscar si existe el mail');
        // aca busca que el mail no exita ya registrado
        // let userInDB = await User.findOne({where: {email: req.body.email}});
        // if (userInDB) {
        //     return res.render('users/add', {
        //         errors: {
        //             email: {
        //                 msg: 'Este email ya está registrado'
        //             }
        //         },
        //         oldData: req.body
        //     });
        // }
        console.log('---------------------- antes de crear el usuario');
        //si paso las validaciones crea el usuario y encripta la contraseña
        try{
            let userCreated = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: req.file.filename,
                rolId: req.body.rolId
            })
console.log(userCreated);
            return res.redirect('/users/login');

        } catch(error) {
            res.send(error)
        }
    },

    edit: (req, res) => {
        console.log('entre en Edit users')
        console.log('----------------------------')
        
        let userId = req.params.id;
        let promUsers = User.findByPk(userId, {
            include: ['rol']
        })
        let promRoles = Rol.findAll();

        Promise
        .all([promUsers, promRoles])
        .then(([users, roles]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'users/userEdit'), {users, roles})
        })
        .catch(error => res.send(error))
    },
    update: async (req, res) => {
        try {
            let user = req.body;
            console.log(' soy la nueva: ' + req.body.avatar)
            console.log('soy la vieja '+ req.body.oldAvatar)

            user.avatar = req.file ? req.file.filename : req.body.oldAvatar;
            if (req.file===undefined) {
                user.avatar = req.body.oldImage
            } else {
                // Actualizaron la foto, saco su nombre del proceso
                user.avatar = req.file.filename 
            }
            delete user.oldAvatar;

            let userId = req.params.id;
            const userUpdate = await User.update(
                {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    userName: req.body.userName,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: req.body.avatar,
                    rolId: req.body.rolId
                },
                {
                    where: {id: userId}
                }
            );
            return res.redirect('/users')
        } catch (error) {
            res.send(error)
        } 
    },

    delete: (req, res) => {

    },
    destroy: (req, res) =>{
        let userId = req.params.id;
        User.destroy({where: {id: userId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/users')})
        .catch(error => res.send(error)) 
    },
    login: (req, res) => {
        return res.render('users/login');
    },
    loginProcess: async (req, res) => {
        // busca el usuario x email su lo encuentra compara contraseña
        try{
        let userToLogin = await User.findOne({where: {email: req.body.email}});
        console.log(userToLogin);
        if(userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                }
                return res.redirect('/users/profile');
            } 
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
            
        }
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        });
    }
    catch(error){
        console.log(error);
    }
    },
    profile: (req, res) => {
        return res.render('users/profile', {
            user: req.session.userLogged
        });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = userController;