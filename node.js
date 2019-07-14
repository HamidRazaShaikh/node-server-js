var express = require ('express');
var bodyParser = require ('body-parser');

var app = express ();
app.use(bodyParser.json({limit: '500kb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '500kb' }));

app.get('/',function (req,res) {
    console.log(req.query);
    res.send(['hello' , 'i am jo']);
    console.log(res);

});

app.get('/hello', function (req, res) {
    console.log(req.query);
    res.send('Hello');
});

app.post('/' , function (req , res) {
    console.log(req.query);
    res.('posted')

});


app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port' + server.address().port)
});

