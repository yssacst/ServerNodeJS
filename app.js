const express = require('express');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.get('/test',(req,res)=>{
    res.end('oi')
})
app.listen(port);
