module.exports = (sequelize, DataTypes) => {
  const notes = sequelize.define('notes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    note: DataTypes.STRING,
    tag: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    deletedon: DataTypes.STRING,
  }, {});


  return notes;
};
