const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen otra forma de llamar a cada uno de los modelos
const User = db.User;
const Address = db.Address;



const addressController = {

    list: (req, res) => {
        Address.findAll()
        

        .then(addresses => {
            res.render('addressList.ejs', {addresses})
        });
    },
    detail: (req, res) =>{
    Address.findByPk(req.params.id)
    .then(addresses => {
        res.render('addressDetail.ejs', {addresses});
      });
    },
    
    //CRUD
    add: (req, res) =>{
        Address.findAll()
        .then(addresses => {
            res.render('addressCreate.ejs', {addresses})
        });
        
    },
    create: async (req, res) => {
        try{
            let addressCreated = await Address.create({
                street: req.body.street,
                number: req.body.number,
                city: req.body.city,
                state: req.body.state,
                floor: req.body.floor,
                apartment: req.body.apartment,
                cp: req.body.cp,
                phone_number: req.body.phone_number,
                userId: req.body.userId
            });
                 
            return res.redirect('/address');

        } catch (error) {
            res.send(error)
        }
    },

    edit: (req, res) =>{
        let addressId = req.params.id;
        let promAddresses = Address.findByPk(addressId, {
            include : ['users']
          });
        let promUsers = User.findByPk(userId)

        Promise
        .all([promAddresses, promUsers])
        .then(([address, users]) => {
            //res.json(product, allCategories, allBrands, allColors, allSizes, allVisibilities, productImages)
            return res.render(path.resolve(__dirname, '..', 'views',  'addressEdit'), {address, users})
          })
        .catch(error => res.send(error))

    },
    update: (req, res) =>{
        let addressId = req.params.id;
        Address.update(
            {
                name: req.body.name
            },
            {
                where: {id: colorId}
            }
        )
        .then(()=> {
        return res.redirect('/address')})    
        .catch(error => res.send(error))
    },

    //delete: (req, res) =>{},
    destroy: (req, res) =>{
        let addressId = req.params.id;
        Address.destroy({where: {id: addressId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/address')})
        .catch(error => res.send(error)) 
    },

    // END CRUD



}

module.exports = addressController;