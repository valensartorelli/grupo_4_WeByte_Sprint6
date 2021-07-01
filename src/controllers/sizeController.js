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


const sizeController = {

    list: (req, res) => {
        Size.findAll()
        .then(sizes => {
            res.render('sizeList.ejs', {sizes})
        });
    },
    detail: (req, res) =>{
    Size.findByPk(req.params.id)
    .then(size => {
        res.render('sizeDetail.ejs', {size});
      });
    },
    search: (req, res) =>{},
    
    //CRUD
    add: (req, res) =>{
        res.render('sizeAdd.ejs');
    },
    create:(req, res) =>{
         Size.create({name: req.body.name})
        .then(()=> {
            return res.redirect('/size')})            
        .catch(error => res.send(error))
    },
    edit: (req, res) =>{
        let sizeId = req.params.id;
        Size         
        .findByPk(sizeId)
        .then(Size => {
            return res.render(path.resolve(__dirname, '..', 'views',  'SizeDelete'), {Size})})
        .catch(error => res.send(error))
    },
    update: (req, res) =>{
        let sizeId = req.params.id;
        Size.update(
            {
                name: req.body.name
            },
            {
                where: {id: sizeId}
            }
        )
        .then(()=> {
        return res.redirect('/size')})    
        .catch(error => res.send(error))
    },

    //delete: (req, res) =>{},
    destroy: (req, res) =>{
        let sizeId = req.params.id;
        Size.destroy({where: {id: sizeId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/size')})
        .catch(error => res.send(error)) 
    },

    // END CRUD



}

module.exports = sizeController;