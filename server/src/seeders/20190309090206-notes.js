/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('notes', [
    {
      id: '7139d3af-b8b4-44f6-a49f-9305791700f4',
      title: 'Manchester united',
      note: 'Manchester united are a victorious team',
      tag: 'Manchester united',
    },
    {
      id: 'fa3def47-153a-40bd-8181-a1c787e083d6',
      title: 'Manchester city',
      note: 'Manchester city the real kings of manchester',
      tag: 'Manchester city',
    },
    {
      id: 'b5f7f2c7-b5b9-47dd-bfea-3372f95404c9',
      title: 'Chelsea',
      note: 'Chelsea are a not so victorious team',
      tag: 'Chelsea',
    }], {}),


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('notes', null, {})
  ,
};
