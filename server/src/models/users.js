/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  user.associate = function (models) {
    user.hasMany(models.Notes, {
      foreignKey: 'userId',
      as: 'Notes',
    });
  };
  return user;
};
