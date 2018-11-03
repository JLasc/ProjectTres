'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', [{
      id: uuidv4(),
      name: 'democompany',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    const company = await queryInterface.sequelize.query(
      `SELECT id from Companies;`
    );

    const companyRows = company[0];
    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        email: 'demoadmin@democompany.com',
        password: '$2a$10$QFV/0p9UPt983bPsEAQal.A6BgP.rQ./TmPEFHJfap3/n5bcBdxla',
        admin: true,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    await queryInterface.bulkInsert('Categories', [{
      id: uuidv4(),
      name: 'laptop',
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    const category = await queryInterface.sequelize.query(
      `SELECT id from Categories;`
    )
    const categoryRows = category[0];

    await queryInterface.bulkInsert('Products', [
      {
        id: uuidv4(),
        name: 'Macbook',
        price: 1349.99,
        model: 'fancy',
        description: 'A super fancy laptop!',
        categoryID: categoryRows[0].id,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {

  }
};
