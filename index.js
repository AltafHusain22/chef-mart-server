const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')
app.use(cors())
const chefsRecips = require('./chefsData/chefsData.json')


app.get('/', (req, res) => {
  res.send('Welcome Server is running well !!')
})
app.get('/chefsRecips', (req , res)=>{
	res.send(chefsRecips)
})

app.get('/singleChef/:id', (req,res)=>{
	const id = req.params.id 
	const singleChefData = chefsRecips.find(scd=> scd.id == id )
	res.send(singleChefData)
})

app.listen(port, () => {
  console.log(`This server is running on Port : ${port}`)
})