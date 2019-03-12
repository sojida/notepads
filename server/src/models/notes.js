module.exports = (sequelize, DataTypes) => {
  const notes = sequelize.define('notes', {
    title: DataTypes.STRING,
    note: DataTypes.STRING,
    tag: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    deletedon: DataTypes.STRING,
  }, {});


  return notes;
};
