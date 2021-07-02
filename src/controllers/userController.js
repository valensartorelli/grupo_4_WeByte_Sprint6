const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const User = db.User;
const Rol = db.Rol;


//const { User, Address } = require('../database/models');

const userController = {

    list: (req, res) => {
        User.findAll()
        .then(users => {
            res.render('users.ejs', {users})
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
                res.render('userDetail', {users});
            });
    },
    
    add: (req, res) => {
        Rol.findAll()
        .then(roles => {
            res.render('userAdd.ejs', {roles})
        });
    },
    create: async (req, res) =>{
        console.log('entre en el Create user')
        console.log('----------------------------')
        
        try{
            let userCreated = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                avatar: req.file.filename,
                rolId: req.body.rolId
            })

            return res.redirect('/users');

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
            return res.render(path.resolve(__dirname, '..', 'views',  'userEdit'), {users, roles})
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
    }
}

module.exports = userController;