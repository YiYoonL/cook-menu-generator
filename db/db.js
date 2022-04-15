const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('cook_menu', '', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        createdAt: false,
        updatedAt: false,
    }
})

// async function testConnect () {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// testConnect()
module.exports = sequelize