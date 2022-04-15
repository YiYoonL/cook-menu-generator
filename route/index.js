const express = require('express')
const app = express()

const path = require("path")

app.use(express.static(path.resolve(__dirname, '../view')))

app.use("/api/menu", require("./api/menu"))

app.listen(1012, () => {
    console.log('listening on 1012');
})