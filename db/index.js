const sequelize = require('./db.js')

require('./singleModel/catagories')
require('./singleModel/subcatagories')
require('./singleModel/tags')
require('./singleModel/vegetables')


sequelize.sync({
    force: false
}).then(() => {
    // console.log('modle', typeof sequelize.models.catagories)
    // require('../service/vegetables')
    require('../index')
})

require('./association')
