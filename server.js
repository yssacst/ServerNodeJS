/*const express = require('express');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.get('/test',(req,res)=>{
    res.end('oi')
})
app.listen(port);
*/

const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.end('oi'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))