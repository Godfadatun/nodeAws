const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  console.log('sass');
  res.send('sasas what')
})

app.listen(3000, ()=>{
  console.log('sup1');

})


