const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const fs = require('fs')
const port = process.env.PORT || 5000


if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())

const vibeRoutes = require('./src/routes/vibe.js')

app.use('/vibe', vibeRoutes)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`The vibe is strong on port ${port}!`)
  })
}
module.exports = app