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


const categoryController = {

    list: (req, res) => {
        Category.findAll()
        .then(categories => {
            res.render('categoryList.ejs', {categories})
        });
    },
    detail: (req, res) =>{
    Category.findByPk(req.params.id)
    .then(categories => {
        res.render('colorDetail.ejs', {categories});
      });
    },
    search: (req, res) =>{},
    
    //CRUD
    add: (req, res) =>{
        res.render('categoryAdd.ejs');
    },
    create:(req, res) =>{
        Category.create({name: req.body.name})
        .then(()=> {
            return res.redirect('/category')})            
        .catch(error => res.send(error))
    },
    edit: (req, res) =>{
        let categoryId = req.params.id;
        Category         
        .findByPk(categoryId)
        .then(Category => {
            return res.render(path.resolve(__dirname, '..', 'views',  'categoryDelete'), {Category})})
        .catch(error => res.send(error))
    },
    update: (req, res) =>{
        let categoryId = req.params.id;
        Category.update(
            {
                name: req.body.name
            },
            {
                where: {id: categoryId}
            }
        )
        .then(()=> {
        return res.redirect('/category')})    
        .catch(error => res.send(error))
    },

    //delete: (req, res) =>{},
    destroy: (req, res) =>{
        let categoryId = req.params.id;
        Category.destroy({where: {id: categoryId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/category')})
        .catch(error => res.send(error)) 
    },

    // END CRUD



}

module.exports = categoryController;