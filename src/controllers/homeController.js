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
    index: (req, res) => {
        db.Product.findAll()
        .then(products => {
             res.json('index', {products})
            //res.render('index', {products})
        })
    },
    listar: (req, res) => {
        db.Product.findAll()
         .then(products => {
            let news = [];

            products.forEach((element, i) => {
                if ( element.news === true) {
                    if ( news.length < 8 ) {
                        news.push(element);
                    } 
                } 
            });
            return res.json('index', {news})
        // return res.render('index', { news})
        })
    }
}

module.exports = homeController;