const Subcatagories = require('../db/singleModel/subcatagories.js')
const Catagories = require('../db/singleModel/catagories.js')
const {formatResult}  = require('./util/util')


async function getAllSubcatagories() {
    const res = await Subcatagories.findAll({
        include: {
            model: Catagories,
            as: 'catagoryData'
        }
    })
    return formatResult(res)
}

async function findSubcatagoriesByCatagory (cata) {
    const res = await Subcatagories.findAll({
        where: {
            catagory: cata
        }
    })
    return formatResult(res)
}

module.exports = {
    getAllSubcatagories,
    findSubcatagoriesByCatagory
}