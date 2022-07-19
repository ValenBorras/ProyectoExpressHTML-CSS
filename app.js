const express = require('express');
const app = express();
const mime = require('mime');

const path = require('path');
const port = process.env.PORT || 3000;
const setHeadersOnStatic = (res, path, stat) => {
    const type = mime.getType(path);
    res.set('content-type', type);
  }
  
  const staticOptions = {
    setHeaders: setHeadersOnStatic
  }

app.use(express.static(path.resolve(__dirname, './public'), staticOptions));

app.listen(port,() => console.log('Servidor corriendo...'));

app.get('/', (req,res) =>{
    res.sendFile( path.join(__dirname, './views/index.html'))
});

app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
});

app.get('/logIn', (req,res) =>{
    res.sendFile(path.join(__dirname,'./views/logIn.html'))
});