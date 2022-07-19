const express = require('express');
const app = express();

const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '/public')));

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