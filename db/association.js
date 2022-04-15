const Catagories = require('./singleModel/catagories')
const Subcatagories = require('./singleModel/subcatagories');
const Tags = require('./singleModel/tags');

console.log('---------associating-----------');
Subcatagories.belongsTo(Catagories,{
    as: 'catagoryData',
    foreignKey: 'catagory',
    targetKey: 'name'
})
Tags.belongsTo(Subcatagories, {
    as: 'subcatagoryData',
    foreignKey: 'subcatagory',
    targetKey: 'name'
})
// Catagories.hasMany(Subcatagories, {
//     sourceKey: 'name',
//     foreignKey: 'catagory'
// })