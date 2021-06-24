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


const colorController = {

    list: (req, res) => {
        Color.findAll()
        .then(colors => {
            res.render('colorList.ejs', {colors})
        });
    },
    detail: (req, res) =>{
    Color.findByPk(req.params.id)
    .then(color => {
        res.render('colorDetail.ejs', {color});
      });
    },
    search: (req, res) =>{},
    
    //CRUD
    add: (req, res) =>{
        res.render('colorAdd.ejs');
    },
    create:(req, res) =>{
         Color.create({name: req.body.name})
        .then(()=> {
            return res.redirect('/color')})            
        .catch(error => res.send(error))
    },
    edit: (req, res) =>{
        let colorId = req.params.id;
        Color         
        .findByPk(colorId)
        .then(Color => {
            return res.render(path.resolve(__dirname, '..', 'views',  'colorDelete'), {Color})})
        .catch(error => res.send(error))
    },
    update: (req, res) =>{
        let colorId = req.params.id;
        Color.update(
            {
                name: req.body.name
            },
            {
                where: {id: colorId}
            }
        )
        .then(()=> {
        return res.redirect('/color')})    
        .catch(error => res.send(error))
    },

    //delete: (req, res) =>{},
    destroy: (req, res) =>{
        let colorId = req.params.id;
        Color.destroy({where: {id: colorId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/color')})
        .catch(error => res.send(error)) 
    },

    // END CRUD



}

module.exports = colorController;