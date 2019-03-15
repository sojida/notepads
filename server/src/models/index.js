import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configSetup from '../config/database';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV;
const config = configSetup[env];
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(process.env.DATABASE_URL, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
