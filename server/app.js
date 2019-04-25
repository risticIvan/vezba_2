var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cookieParser());
app.use(express.static('js'));
app.use(cors());
app.use(bodyParser.json())

app.use(function (req, res, next){
    if(!res.cookie.user_id) {
        res.cookie('user_id', Math.random(), { maxAge: 900000, httpOnly: true });
    }
    next();
});

app.get('/',function(req, res){
    // res.send('Page loaded and cookie is ' + req.cookies.user_id);
    // res.sendFile(__dirname+'/index.html');
    // res.sendFile('C:\Users\i.ristic\Desktop\React Node\client\public\index.html');
    console.log('Cookie is ' + req.cookies.user_id);
    res.send("hello!");
});

app.post('/login',function(req, res){
    if (req.body.username === '' || req.body.username === null || req.body.password === '' || req.body.password === null) {
        res.sendStatus(401);
    }
    else if (req.body.username === 'user' && req.body.password === 'pass') {
        // res.redirect('http://localhost:3000/about/')
        res.sendStatus(200);
    }else {
        res.sendStatus(403);
    }
});

app.get('/showid', function(req, res){
    // res.sendFile(__dirname+'/showid.html');
    res.send('Cookie is ' + req.cookies.user_id);
});

app.get('/hello', function (req, res){
    res.send("hello from hello method!!!");
});

app.listen(9000, ()=> {
    console.log('Listening on port 9000')
})