const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Product = db.Product;
const Brand = db.Brand;
const Category = db.Category;
const Color = db.Color;
const Size = db.Size;
const Visibility = db.Visibility;


const visibilityController = {

    list: (req, res) => {
        Visibility.findAll()
        .then(visibilities => {
            res.render('visibilityList.ejs', {visibilities})
        });
    },
    detail: (req, res) =>{
    Visibility.findByPk(req.params.id)
    .then(visibility => {
        res.render('visibilityDetail.ejs', {visibility});
      });
    },
    search: (req, res) =>{},
    
    //CRUD
    add: (req, res) =>{
        res.render('visibilityAdd.ejs');
    },
    create:(req, res) =>{
         Visibility.create({name: req.body.name})
        .then(()=> {
            return res.redirect('/visibility')})            
        .catch(error => res.send(error))
    },
    edit: (req, res) =>{
        let visibilityId = req.params.id;
        Visibility         
        .findByPk(visibilityId)
        .then(Visibility => {
            return res.render(path.resolve(__dirname, '..', 'views',  'visibilityDelete'), {Visibility})})
        .catch(error => res.send(error))
    },
    update: (req, res) =>{
        let visibilityId = req.params.id;
        Visibility.update(
            {
                name: req.body.name
            },
            {
                where: {id: visibilityId}
            }
        )
        .then(()=> {
        return res.redirect('/visibility')})    
        .catch(error => res.send(error))
    },

    //delete: (req, res) =>{},
    destroy: (req, res) =>{
        let visibilityId = req.params.id;
        Visibility.destroy({where: {id: visibilityId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/visibility')})
        .catch(error => res.send(error)) 
    },

    // END CRUD



}

module.exports = visibilityController;