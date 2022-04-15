const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db.js')

class Catagories extends Model {}

Catagories.init({
  name: {
    type: DataTypes.STRING,
    field: 'name',
    allowNull: false
  },
  'lunchQuantity': {
    type: DataTypes.INTEGER,
    field: 'lunch_quantity'
  },
  'dinnerQuantity': {
    type: DataTypes.INTEGER,
    field: 'dinner_quantity'
  },
  'dayQuantity': {
    type: DataTypes.INTEGER,
    field: 'day_quantity'
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'catagories' // We need to choose the model name
});
// Catagories.removeAttribute('id')
// Catagories.sync({force: false})
module.exports = Catagories