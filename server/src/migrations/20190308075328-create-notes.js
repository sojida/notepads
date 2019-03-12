module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('notes', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    note: {
      type: Sequelize.TEXT,
    },
    tag: {
      type: Sequelize.STRING,
    },
    deleted: {
      type: Sequelize.BOOLEAN,
    },
    deletedon: {
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('notes'),
};
