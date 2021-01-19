const express = require('express');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.get('/test',(req,res)=>{
    res.end('oi')
})
app.get('/json',(req,res)=>{
  res.json({msg:'FOOOOOOOOOOOI'})
})
app.listen(port);
