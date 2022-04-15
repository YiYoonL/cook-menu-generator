const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db.js')

class Subcatagories extends Model {}

Subcatagories.init({
  name: {
    type: DataTypes.STRING,
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
  'catagory': {
    type: DataTypes.STRING
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'subcatagories' // We need to choose the model name
});
// Subcatagories.removeAttribute('id')
module.exports = Subcatagories