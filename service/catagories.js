const Catagories = require('../db/singleModel/catagories.js')
const {formatResult}  = require('./util/util')


async function getAllCatagories() {
    const res = await Catagories.findAll()
    return formatResult(res)
}

module.exports = {
    getAllCatagories
}