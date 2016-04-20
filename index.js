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

  app.get('/seed', (req, res) => {
    db.collection('links').insert({title: "GraphQL Intro", url: "https://medium.com/apollo-stack/the-basics-of-graphql-in-5-links-9e1dc4cac055#.et3len8xr"})
    res.send("Seeding the db...")
  })

  app.use('/graphql', GraphQLHTTP({
    schema: schema(db),
    graphiql: false
  }))

  app.listen(3000, () => {
    console.log("Server running on port 3000!")
  })

})

