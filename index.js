import express from 'express'
import schema from './data/schema.js'
import GraphQLHTTP from 'express-graphql'

var MongoClient = require('mongodb').MongoClient

let app = express()

let db
let url = 'mongodb://localhost:27017/linky'

MongoClient.connect(url, (err, database) => {
  if (err) throw err

  db = database
  app.get('/', (req, res) => {
    res.send("Hello, program")
  })

  app.use('/graphql', GraphQLHTTP({
    schema,
    graphiql: true
  }))

  app.listen(3000, () => {
    console.log("Server running on port 3000!")
  })

})

