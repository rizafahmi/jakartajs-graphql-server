import express from 'express'

let app = express()

app.get('/', (req, res) => {
  res.send("Hello, program")
})
