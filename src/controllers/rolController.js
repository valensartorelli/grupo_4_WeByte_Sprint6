const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Rol = db.Rol;
const Visibility = db.Visibility;


const rolController = {

    list: (req, res) => {
        Rol.findAll()
        .then(roles => {
            res.render('rolList.ejs', {roles})
        })
        .catch(error => res.send(error))
    },
    detail: (req, res) =>{
    Rol.findByPk(req.params.id)
    .then(roles => {
        res.render('rolDetail.ejs', {roles});
      });
    },
    
    //CRUD
    add: (req, res) =>{
        res.render('rolList.ejs');
    },
    create:(req, res) =>{
         Rol.create({name: req.body.name})
        .then(()=> {
            return res.redirect('/rol')})            
        .catch(error => res.send(error))
    },
    edit: (req, res) =>{
        let rolId = req.params.id;
        Rol         
        .findByPk(rolId)
        .then(Rol => {
            return res.render(path.resolve(__dirname, '..', 'views',  'rolDelete'), {Rol})})
        .catch(error => res.send(error))
    },
    update: (req, res) =>{
        let rolId = req.params.id;
        Rol.update(
            {
                name: req.body.name
            },
            {
                where: {id: rolId}
            }
        )
        .then(()=> {
        return res.redirect('/rol')})    
        .catch(error => res.send(error))
    },

    //delete: (req, res) =>{},
    destroy: (req, res) =>{
        let rolId = req.params.id;
        Rol.destroy({where: {id: rolId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/rol')})
        .catch(error => res.send(error)) 
    },

    // END CRUD



}

module.exports = rolController;