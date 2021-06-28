const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Product = db.Product;
const Brand = db.Brand;
const Category = db.Category;
const Color = db.Color;
const Size = db.Size;
const Visibility = db.Visibility;

//const { Product, Brand, Category, Color, Size, Visibility } = require('../database/models');

const productController = {

    list: (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render('products.ejs', {products})
            })
    },
    detail: (req, res) =>{
        console.log('entre a Detail product')
        console.log('----------------------------')
        let productId = req.params.id;
        Product.findByPk(productId,
            {
                include : ['Category','Brand', 'Color', 'Size', 'Visibility']
            })
            .then(product => {
               // res.json(product)
                res.render('productDetail', {product});
            });
    },

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
        console.log('entre en el Create product')
        console.log('----------------------------')
        console.log(req.body.name);
        console.log(req.body.stock);
        console.log(req.body.stock_min);
        console.log(req.body.stock_max);
        console.log(req.body.description);
        console.log(req.body.price);
        console.log(req.body.brandId);
        console.log(req.body.categoryId);
        console.log(req.body.sizeId);
        console.log(req.body.colorId);
        console.log(req.body.visibilityId);
        console.log(req.body.home);
        console.log(req.body.extended);

        Product.create(
            {
                name: req.body.name,
                stock: req.body.stock,
                stock_min: req.body.stock_min,
                stock_max: req.body.stock_max,
                description: req.body.description,
                price: req.body.price,
                brandId: req.body.brandId,
                categoryId: req.body.categoryId,
                sizeId: req.body.sizeId,     
                colorId: req.body.colorId,          
                visibilityId: req.body.visibilityId,
                home: req.body.home,
                extended_description: req.body.extended
            }
            
        )
        .then(()=> {
            
            return res.redirect('/product')})            
        .catch(error => res.send(error))
    },
    

    edit: (req, res) =>{
        console.log('entre en Edit product')
        console.log('----------------------------')
        console.log(req.params.id);
    
        let productId = req.params.id;
        let promProducts = Product.findByPk(productId, {
            include: ['Category','Brand', 'Color', 'Size', 'Visibility']
          });
        let promCategories = Category.findAll();
        let promBrands = Brand.findAll();
        let promColors = Color.findAll();
        let promSizes = Size.findAll();
        let promVisibilities = Visibility.findAll();
        
        Promise
        .all([promProducts, promCategories, promBrands, promColors, promSizes, promVisibilities])
        .then(([product, allCategories, allBrands, allColors, allSizes, allVisibilities]) => {
            //res.json(product, allCategories, allBrands, allColors, allSizes, allVisibilities)
            return res.render(path.resolve(__dirname, '..', 'views',  'productEdit'), {product, allCategories, allBrands, allColors, allSizes, allVisibilities})
          })
        .catch(error => res.send(error))
    },

    update: async (req, res) =>{
        let productId = req.params.id;
        try {
            const response = await Product.update(
                {
                name: req.body.name,
                stock: req.body.stock,
                stock_min: req.body.stock_min,
                stock_max: req.body.stock_max,
                description: req.body.description,
                price: req.body.price,
                brandId: req.body.brandId,
                categoryId: req.body.categoryId,
                sizeId: req.body.sizeId,     
                colorId: req.body.colorId,          
                visibilityId: req.body.visibilityId,
                home: req.body.home,
                extended_description: req.body.extended
                },
                {
                    where: {id: productId}
                }
            );
            //const product = await Product.findByPk(productId);
            // permite ver la relacion de la tabla product con color por ej
            //const productColor = await product.getColor();
            //console.log(productColor);
            // para setear de cero tabla intermedia de muchos a muchos - el 1 es de product
            // await product.setImage([1]);
            // para agrega a tabla - el 1 es de product nombre del modelo en plural si la relacion es a muchos
            // await product.addImage([2]);
            // const movieActorsSetted = await movie.getActors();
            // console.log(movieActorsSetted);
            return res.redirect('/product')            
        } catch (error) {
            res.send(error)
        }
    },

    delete: (req, res) =>{},
    destroy: (req, res) =>{},

    // END CRUD



}

module.exports = productController;