/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      id: '7139d3af-b8b4-44f6-a49f-9305791700f4',
      firstName: 'amaechi',
      lastName: 'chuks',
      email: 'amaechichuks2000@yahoo.com',
      password: 'chuks',
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {})
  ,
};
