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
        firstName: 'Demo',
        lastName: 'Admin',
        admin: true,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        email: 'demouser@democompany.com',
        password: '$2a$10$D300FeS3EJfeCPDEOFwm1OczSxImwe/r6tFyfpd5EEBHjWUqmB7z6',
        firstName: 'Demo',
        lastName: 'User',
        admin: false,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        email: 'anotherdemo@democompany.com',
        password: '$2a$10$/gBpcse6Lc8BqSigDc0rUO/rQuYYtIXWvVIHs9L3ykwtv2ptyuiya',
        firstName: 'Another',
        lastName: 'Demo',
        admin: false,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        email: 'thirddemo@democompany.com',
        password: '$2a$10$jkVOkrWZscH.ksNuq9DoQeUcPIhF1iicTa2U7x9jHerGGxOgd6BTi',
        firstName: 'Third',
        lastName: 'User',
        admin: false,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    await queryInterface.bulkInsert('Categories', [
      {
      id: uuidv4(),
      name: 'laptop',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'smartphone',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'accessory',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

    const category = await queryInterface.sequelize.query(
      `SELECT id from Categories;`
    )
    const categoryRows = category[0];

    await queryInterface.bulkInsert('Products', [
      {
        id: uuidv4(),
        name: 'Macbook Pro',
        price: 1499.99,
        model: '13-inch',
        description: `MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you will get there faster than ever with high performance processors and memory, advanced graphics, blazing fast storage, and more.`,
        image: 'mbp13',
        categoryID: categoryRows[0].id,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Macbook Pro',
        price: 2399.99,
        model: '15-inch',
        description: `MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you will get there faster than ever with high performance processors and memory, advanced graphics, blazing fast storage, and more.`,
        image: 'mbp15',
        categoryID: categoryRows[0].id,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'iPhone Xr',
        price: 749.00,
        model: '64 GB',
        description: `All new Liquid Retina display — the most advanced LCD in the industry. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough camera system with Depth Control. iPhone XR. It's beautiful any way you look at it.`,
        image: 'iphoneXR',
        categoryID: categoryRows[1].id,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'iPhone Xr',
        price: 899.00,
        model: '256 GB',
        description: `All new Liquid Retina display — the most advanced LCD in the industry. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough camera system with Depth Control. iPhone XR. It's beautiful any way you look at it.`,
        image: 'iphoneXR',
        categoryID: categoryRows[1].id,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Magic Mouse 2',
        price: 99.00,
        model: 'Space Gray',
        description: `Magic Mouse 2 is completely rechargeable, so you'll eliminate the use of traditional batteries. It's lighter, has fewer moving parts thanks to its built in battery and continuous bottom shell, and has an optimized foot design — all helping Magic Mouse 2 track easier and move with less resistance across your desk.`,
        image: 'magicMouse',
        categoryID: categoryRows[2].id,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Magic Keyboard',
        price: 149.00,
        model: 'Space Gray',
        description: `Magic Keyboard with Numeric Keypad features an extended layout, with document navigation controls for quick scrolling and full size arrow keys for gaming. A scissor mechanism beneath each key allows for increased stability, while optimized key travel and a low profile provide a comfortable and precise typing experience.`,
        image: 'magicKeyboard',
        categoryID: categoryRows[2].id,
        companyID: companyRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {

  }
};
