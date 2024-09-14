"use strict";
const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const basename = path.basename(__filename);
const db = {};
const env = process.env.NODE_ENV || 'production';
const dbConfig = require("../config/dbConfig")[env];
let sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.dialect);

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
sequelize.authenticate().then(() => {
    console.log(`Connected to ${process.env.DBNAME}`);
  }).catch((err) => {
    console.log(err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Employee
db.employees = require("./employees")(sequelize, DataTypes);

module.exports = db;