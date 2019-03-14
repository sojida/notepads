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
      defaultValue: false,
    },
    deletedon: {
      type: Sequelize.DATE,
      defaultValue: null,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('notes'),
};
