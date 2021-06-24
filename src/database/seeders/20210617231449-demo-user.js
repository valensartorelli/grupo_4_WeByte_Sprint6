'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let direccion = [{
      street: faker.address.streetName(),
      number: 123,
      city: faker.address.city(),
      state: faker.address.state(),
      floor: 8,
      apartment: "B",
      cp: faker.address.zipCode(),
      phone_number: faker.phone.phoneNumber()
    },{
      street: faker.address.streetName(),
      number: 123,
      city: faker.address.city(),
      state: faker.address.state(),
      floor: 8,
      apartment: "B",
      cp: faker.address.zipCode(),
      phone_number: faker.phone.phoneNumber()
    },{
      street: faker.address.streetName(),
      number: 123,
      city: faker.address.city(),
      state: faker.address.state(),
      floor: 8,
      apartment: "B",
      cp: faker.address.zipCode(),
      phone_number: faker.phone.phoneNumber()
    },{
      street: faker.address.streetName(),
      number: 123,
      city: faker.address.city(),
      state: faker.address.state(),
      floor: 8,
      apartment: "B",
      cp: faker.address.zipCode(),
      phone_number: faker.phone.phoneNumber()
    },{
      street: faker.address.streetName(),
      number: 123,
      city: faker.address.city(),
      state: faker.address.state(),
      floor: 8,
      apartment: "B",
      cp: faker.address.zipCode(),
      phone_number: faker.phone.phoneNumber()
    }]
    await queryInterface.bulkInsert('addresses', direccion, {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('addresses', null, {});
     
  }
};
