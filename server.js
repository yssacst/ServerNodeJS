const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.end('Teste 1');
});

app.listen(5000);