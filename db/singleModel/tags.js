const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db.js')

class Tags extends Model {}

Tags.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  'times': {
    type: DataTypes.INTEGER,
    field: 'times_every_week'
  },
  'subcatagory': {
    type: DataTypes.STRING
  },
  'selectNum': {
    type: DataTypes.INTEGER,
    field: 'cata_num'
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'tags' // We need to choose the model name
});
// Tags.removeAttribute('id')
module.exports = Tags