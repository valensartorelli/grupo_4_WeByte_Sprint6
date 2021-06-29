const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const User = db.User;
const Address = db.Address;


//const { User, Address } = require('../database/models');

const userController = {

    list: (req, res) => {
        User.findAll()
        .then(users => {
            res.render('users.ejs', {users})
        });
    },
    
    add: (req, res) => {
        res.render('userAdd.ejs')
    },
    create: (req, res) => {
        console.log('entre en el Create user')
        console.log('----------------------------')
        
        User.create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                avatar: req.file.filename
            }
        )
        .then(()=> {
            //res.json(product)
            return res.redirect('/users')
        })            
        .catch(error => res.send(error))
    },

    edit: (req, res) => {
        console.log('entre en Edit users')
        console.log('----------------------------')
        
        let userId = req.params.id;
        let users = User.findByPk(userId)
        .then((users) => {
            res.render('userEdit.ejs', {users})
        })
    },
    update: (req, res) => {
        let userId = req.params.id;
        
        User.update(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                addressId: req.body.addressId,
                avatarId: req.body.avatarId
            },
            {
                where: {id: userId}
            }
        )
        .then(()=> {
        return res.redirect('/users')})    
        .catch(error => res.send(error))
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