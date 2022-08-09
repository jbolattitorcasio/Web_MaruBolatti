var express = require('express');
var app = express();
/* Set up handlebars view engine */ 
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
/* Set Port */ 
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
/* Routing */
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/direccion', function (req, res) {
    res.render('director');
});
app.get('/produccion', function (req, res) {
    res.render('producer');
});
app.get('/contacto', function (req, res) {
    res.render('contact');
});
/* For errors */ 
// custom 404 page
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
// custom 500 page
app.use(function (err, req, res) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
}); 
// 404 catch-all handler
app.use(function (req, res) {
    res.status(404);
    res.render('404');
});
// 500 error handler
app.use(function (err, req, res) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});
/* Port in console */
app.listen(app.get('port'), function(){
    console.log('Started on http://localhost:' +
    app.get('port'));
});