const Subcatagories = require('../db/singleModel/subcatagories.js')
const Tags = require('../db/singleModel/tags.js')
const {formatResult}  = require('./util/util')


async function getAllTags() {
    const res = await Tags.findAll({
        include: {
            model: Subcatagories,
            as: 'subcatagoryData'
        }
    })
    return formatResult(res)
}

async function findTagsBySubcatagory (cata) {
    const res = await Tags.findAll({
        where: {
            subcatagory: cata
        }
    })
    return formatResult(res)
}

module.exports = {
    getAllTags,
    findTagsBySubcatagory
}