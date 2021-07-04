const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const {validationResult} = require('express-validator');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Product = db.Product;
const Brand = db.Brand;
const Category = db.Category;
const Color = db.Color;
const Size = db.Size;
const Visibility = db.Visibility;
const Image = db.Image;

//const { Product, Brand, Category, Color, Size, Visibility } = require('../database/models');

const productController = {

    list: async (req, res) =>{
        try{ 
            let products = await Product.findAll({
                include: [
                   "brand", "category", "color", "size", "visibility", "images"
                ]
            });

            console.log(products);
            console.log("URL: " + req.params.category);
            
            const categoria = req.params.category;
            return res.render('products/products', {products, categoria});
            
        }
        catch(error){
            console.log(error);
        }


    },
    detail: (req, res) =>{
        console.log('entre a Detail product')
        console.log('----------------------------')
        let productId = req.params.id;
        Product.findByPk(productId,
            {
                include : ['images','category','brand', 'color', 'size', 'visibility' ]
            })
            .then(product => {
               // res.json(product)
                res.render('products/productDetail', {product});
            });
    },

    search: async (req, res) =>{
        // Product
        //     .findAll({
        //         where: {
        //             name: { [Op.like] : '%' + req.query.keyword + '%' }
        //         }
        //     })
        //     .then(products => {
        //         if(products.length > 0) {
        //             //return res.json(products)
        //             res.render('products/productSearch', {products});
        //         }
        //         //return res.status(200).json('El producto que busca no ha sido encontrado')
        //         return res.render('products/productNoSearch');
        //     })
        try {
            let search= req.query.keyword ;
            let products = await Product.findAll({
                where: {
                    name: { [Op.like] : '%' + search + '%' }
                },
                include : ['category','brand', 'color', 'size', 'visibility','images' ]
            })
            res.render('products/productSearch', {products})
        } catch (error) {
            res.send(error)
        }
    
    },

    
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
            return res.render(path.resolve(__dirname, '..', 'views',  'products/createProduct'), {allCategories, allBrands, allColors, allSizes, allVisibilities})})
        .catch(error => res.send(error))
    },
    
    create: async (req, res) =>{
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
        console.log(req.body.extended_description);   
        // validacion del create
    const products = await db.Product.findByPk(req.params.id);
    let allCategories = await Category.findAll();
    let allBrands = await Brand.findAll();
    let allColors = await Color.findAll();
    let allSizes = await Size.findAll();
    let allVisibilities = await Visibility.findAll();
    const errors = validationResult(req);
    if (errors.errors.length > 0) {
        return res.render('products/createProduct', {
        errors: errors.mapped(),
        oldData: req.body, //Esto es para que no se vaya borrando lo que uno escribe
        products,
        allCategories,
        allBrands,
        allColors,
        allSizes,
        allVisibilities
      });
    }    
       // primero crea el producto
        try{
          let productCreated = await Product.create({
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
                extended_description: req.body.extended_description,
            });

            let imagesCreated = await Image.create (
                {
                name: req.file.filename,
                productId: productCreated.id
                
            })
             
            console.log(imagesCreated);
            return res.redirect('/product/:category');
        
//hasta aca try
        } catch (error) {
            res.send(error)
        }

    },
    

    edit: (req, res) =>{
        console.log('entre en Edit product')
        console.log('----------------------------')
        console.log(req.params.id);
    
        let productId = req.params.id;
        let promProducts = Product.findByPk(productId, {
            include : ['images','category','brand', 'color', 'size', 'visibility', ]
          });
        let promCategories = Category.findAll();
        let promBrands = Brand.findAll();
        let promColors = Color.findAll();
        let promSizes = Size.findAll();
        let promVisibilities = Visibility.findAll();
        let promImage = Image.findOne();
        
        Promise
        .all([promProducts, promCategories, promBrands, promColors, promSizes, promVisibilities, promImage ])
        .then(([product, allCategories, allBrands, allColors, allSizes, allVisibilities, productImages]) => {
            //res.json(product, allCategories, allBrands, allColors, allSizes, allVisibilities, productImages)
            return res.render(path.resolve(__dirname, '..', 'views',  'products/productEdit'), {product, allCategories, allBrands, allColors, allSizes, allVisibilities, productImages})
          })
        .catch(error => res.send(error))
    },

    update: async (req, res) =>{
        try {
        let product = req.body;
        console.log(' soy la nueva: ' + req.body.image)
        console.log('soy la vieja '+ req.body.oldImage)
        product.image = req.file ? req.file.filename : req.body.oldImagen;
        if (req.file===undefined) {
            product.image = req.body.oldImage
        } else {
            // Actualizaron la foto, saco su nombre del proceso
            product.image = req.file.filename 
        }
        console.log('.......MOSTRAR LA IMAGEN.......')
        console.log(product.image)
        console.log(product)  
        delete product.oldImagen;

        let productId = req.params.id;
        const productUpdate = await Product.update(
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
                extended_description: req.body.extended_description
                },
                {
                    where: {id: productId}
                }
            );
            console.log('------------------muestra datos del req.body');
            console.log(productUpdate);

            let productImages = await Image.update({
                name: product.image
                
            },

                {where: {productId: productId}});

            console.log('------------------muestra datos del la imagen');
            console.log(productImages);
            return res.redirect('/product');         
        } catch (error) {
            res.send(error)
        }
    },

    delete: (req,res) => {
        let productId = req.params.id;
        Product
        .findByPk(productId)
        .then(product => {
        return res.render(path.resolve(__dirname, '..', 'views',  'products/productDelete'), {product})})
        .catch(error => res.send(error))
    },

    destroy: async function (req, res) { 
        let productId = req.params.id;
        await Image.destroy({ where: { productId: productId }, force: true });
        await Product.destroy({ where: { id: productId }, force: true });
        return res.redirect('/product')
        .catch(error => res.send(error)) 
    },

    // END CRUD
    cart: (req, res) => {
        res.render('products/productCart');
    },


}

module.exports = productController;