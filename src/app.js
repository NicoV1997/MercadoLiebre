const path = require('path'); 

const express = require('express');
const app = express();

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log('Server ON')
})


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.use(express.static(path.resolve(__dirname, "../public")));