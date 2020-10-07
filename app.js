const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  console.log('sass');
  res.send('sasas what')
})

const port = process.env.port || 3000

app.listen(port, ()=>{
  console.log('sup1');

})


