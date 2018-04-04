const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const fs = require('fs')
const port = process.env.PORT || 3000
const cors = require('cors')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const vibeRoutes = require('./src/routes/vibe.js')

app.use('/vibe', vibeRoutes)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`The vibe is strong on port ${port}!`)
  })
}

// hashed_pwd = bcrypt.hash(params.password)
// userModel.createUser(username, hashed_pwd)
// .then(
//     send success (200, new user created)
// catch (err
//     send 400
// )
//
// )

//
// useModel.findUser(params.username)
// .then(user)
//   if(user.hashed_pwd === b.crypt.has(params.pwd))
//     //issue jwt
//
//   else
//     res.status(403)send({message: invalid username or pwd})
//   .catch
//     res.status(403).send({message: invalid username or pwd})




module.exports = app