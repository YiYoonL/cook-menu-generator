const express = require("express")
const router = express.Router()
const {getHandler} = require('../util')
const {main} = require('../../index')

router.get("/", getHandler(async (req) => {
    return await main()
}))

module.exports = router