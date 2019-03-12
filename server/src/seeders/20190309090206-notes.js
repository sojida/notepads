module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('notes', [
    {
      id: '7139d3af-b8b4-44f6-a49f-9305791700f4',
      title: 'Manchester united',
      note: 'Manchester united are a victorious team',
      tag: 'Manchester united',
      deleted: false,
      deletedon: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'b5f7f2c7-b5b9-47dd-bfea-3372f95404c9',
      title: 'Chelsea',
      note: 'Chelsea are a not so victorious team',
      tag: 'Chelsea',
      deleted: false,
      deletedon: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}), /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('notes', null, {})
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  ,
};
