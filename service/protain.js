const Protain = require('../db/singleModel/Protain.js')
const {formatResult}  = require('./util/util')

// Protain.findAll().then(res=> {
//     // console.log('res',JSON.parse(JSON.stringify(res, null, 4)))
//     // console.log('res',res)
// })

async function findByCatagory (cata) {
    const res = await Protain.findAll({
        where: {
            catagory: cata
        }
    })
    return formatResult(res)
}

async function findProtainByTags (tag) {
    const res = await Protain.findAll({
        where: {
            tag: tag
        }
    })
    return formatResult(res)
}

module.exports = {
    findByCatagory,
    findProtainByTags
}
