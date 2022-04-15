const Vegetables = require('../db/singleModel/vegetables.js')
const {formatResult}  = require('./util/util')

// Vegetables.findAll().then(res=> {
//     // console.log('res',JSON.parse(JSON.stringify(res, null, 4)))
//     // console.log('res',res)
// })

async function findByCatagory (cata) {
    const res = await Vegetables.findAll({
        where: {
            catagory: cata
        }
    })
    return formatResult(res)
}

async function findVegetablesByTags (tag) {
    const res = await Vegetables.findAll({
        where: {
            tag: tag
        }
    })
    return formatResult(res)
}

module.exports = {
    findByCatagory,
    findVegetablesByTags
}
