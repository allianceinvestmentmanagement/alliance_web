const  express = require('express');
const path =  require('path');
const bodyparser = require('body-parser');
const port = process.env.PORT || 8080

var app = express();
// view engine setup
app.use(express.static(path.join(__dirname, 'public/index.html')));
app.use(bodyparser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, process.env.IP, () =>{
     console.log(port);
})