const Carbohydrate = require('../db/singleModel/carbohydrate.js')
const {formatResult}  = require('./util/util')

// Carbohydrate.findAll().then(res=> {
//     // console.log('res',JSON.parse(JSON.stringify(res, null, 4)))
//     // console.log('res',res)
// })

async function findByCatagory (cata) {
    const res = await Carbohydrate.findAll({
        where: {
            catagory: cata
        }
    })
    return formatResult(res)
}

async function findCarbohydrateByTags (tag) {
    const res = await Carbohydrate.findAll({
        where: {
            tag: tag
        }
    })
    return formatResult(res)
}

module.exports = {
    findByCatagory,
    findCarbohydrateByTags
}
