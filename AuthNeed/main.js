//строка в поисковик http://localhost:8080/

let express = require('express');
let app = express();

let cookieParser = require('cookie-parser');
let session = require('express-session');
let bodyParser = require('body-parser');
let path = require('path');

app.use(bodyParser.json());

let port = 8080;

//загерестрированные пользователи
let users = [
    { username: 'david', password: '1223'},
    { username: 'kate', password: '5565'},
    { username: 'dima', password: '0000'},
    { username: 'sveta', password: '2476'},
    { username: 'vv7', password: '3953'},
    { username: 'bbr', password: '9999'}
];

app.use(cookieParser());
app.use(session({
    //store: store,
    resave: false,
    saveUninitialized: true,
    secret: 'supersecret'
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', function(req, res){
    let foundUser;
    for (let i = 0; i < users.length; i++){
        let u = users[i];
        if (u.username == req.body.username && u.password == req.body.password){
            foundUser = u.username;
            break;
        }
    }
    if (foundUser !== undefined){
        req.session.username = foundUser;
        console.log("Login succeeded: ", req.session.username);
        res.send(`Login successful:` + ' user ' + req.session.username);
    } else {
        console.log("Login failed: ", req.body.username)
        res.status(401).send('Login error');
    }
});

app.get('/check', function (req, res){
    if (req.session.username){
        res.set('Content-Type','text/html');
        res.send('<h2>User ' + req.session.username + ' is logged in! </h2>')
    } else {
        res.send('not logged in');
    }
});

app.listen(port, function() {
    console.log('app running on port ' + port);
});