import express from 'express'
import schema from './data/schema.js'
import GraphQLHTTP from 'express-graphql'

let app = express()

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
