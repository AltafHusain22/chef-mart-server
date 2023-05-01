const express = require('express')
const app = express()
const port = 5000


app.listen(port, () => {
  console.log(`This server is running on Port : ${port}`)
})