const db = require('../database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;
const {Image} = require('../database/models');

//Aqui tienen otra forma de llamar a cada uno de los modelos


const imagesController = {

    // Función para crear en masa
    bulkCreate: async (id, images) => {

        // Agrego a cada uno de los comentarios el ID de tutorial.
        images.forEach(image => image.productId = id);
    
        // Rafaga de Creates.
        return await Image.bulkCreate(images);
    },

    detail: async (productId) => {
        let images = await Image.findAll(
            {
                where: {productId: productId}
            }
            );

        return images;
    },
    update: async (imageId, imageName) => {
        let image = await Image.update({
            name: imageName
            },{
            where: {id: imageId}
        });

        return image;
    },


    bulkEdit: async (productId, images) => {
        let imagesForProduct=[];
        let numImg = 0;
        let imagesOld = await imagesController.detail(productId);

        images.forEach(image => {
            imagesForProduct.push(imageController.update(imageOld[numImg].id, image.name));
        });

        return imagesForProduct;
    }
};


module.exports = imagesController;