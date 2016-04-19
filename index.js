import express from 'express'

let app = express()

app.get('/', (req, res) => {
  res.send("Hello, program")
})

app.listen(3000, () => {
  console.log("Server running on port 3000!")
})
