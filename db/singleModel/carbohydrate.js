const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db.js')

class Carbohydrate extends Model {}

Carbohydrate.init({
  name: {
    type: DataTypes.STRING,
    field: 'name',
    allowNull: false
  },
  'price': {
    type: DataTypes.FLOAT(2)
  },
  'catagory': {
    type: DataTypes.STRING,
  },
  'tag': {
    type: DataTypes.STRING,
  },
  'energy': {
    type: DataTypes.INTEGER
  },
  'quantity': {
    type: DataTypes.INTEGER
  },
  'quantization': {
    type: DataTypes.STRING
  },
  'times': {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  freezeTableName: true,
  modelName: 'carbohydrate' // We need to choose the model name
});
// Carbohydrate.removeAttribute('id')
// Carbohydrate.sync({force: false})
module.exports = Carbohydrate