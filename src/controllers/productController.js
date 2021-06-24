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


const productController = {

    list: (req, res) => {
         res.render('products.ejs')
    },
    detail: (req, res) =>{},

    search: (req, res) =>{},
    
    //CRUD
    add: (req, res) =>{
        let promCategories = Category.findAll();
        let promBrands = Brand.findAll();
        let promColors = Color.findAll();
        let promSizes = Size.findAll();
        let promVisibilities = Visibility.findAll();
        
        Promise
        .all([promCategories, promBrands, promColors, promSizes, promVisibilities ])
        .then(([allCategories, allBrands, allColors, allSizes, allVisibilities]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'createProduct'), {allCategories, allBrands, allColors, allSizes, allVisibilities})})
        .catch(error => res.send(error))
    },
    create:(req, res) =>{
        Product.create(
            {
                name: req.body.name,
                stock: req.body.stock,
                stock_min: req.body.stock_min,
                stock_max: req.body.stock_max,
                description: req.body.description,
                extended_description: req.body.extended_description,
                price: req.body.price,
                categoryId: req.body.categoryId,
                brandId: req.body.brandId,
                colorId: req.body.colorId,
                sizeId: req.body.sizeId,
                visibilitiesId: req.body.visibilityId,
                home: req.body.home
            }
        )
        .then(()=> {
            return res.redirect('/products')})            
        .catch(error => res.send(error))
    },
    

    edit: (req, res) =>{},
    update: (req, res) =>{},

    delete: (req, res) =>{},
    destroy: (req, res) =>{},

    // END CRUD



}

module.exports = productController;