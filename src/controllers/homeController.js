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
const Image = db.Image;

let homeController = {
    index: async (req, res) =>{
        try{ 
            let products = await Product.findAll({
                include: [
                   "brand", "category", "color", "size", "visibility", "images"
                ]
            });

            console.log(products);
            console.log("URL: " + req.params.category);
            
            const categoria = req.params.category;
            return res.render('index', {products, categoria});
            
        }
        catch(error){
            console.log(error);
        }
    },
    admin: (req, res) => {
        res.render('admin');
    }
}

module.exports = homeController;