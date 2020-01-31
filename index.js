const express = require('express');
const isNumber = require('./middleware/isnumber');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//
//
// app.get('/', function (req, res){
//     res.send('Hello World!')
// });
//
// app.get('/affichage/:moins/:plus/:indice', function (req,res){
//     if ( req.params.indice === 'x'){
//         req.params.total = req.params.moins * req.params.plus;
//         res.send("Résultat = "  + req.params.total )
//     }
//     else if ( req.params.indice === '+'){
//         req.params.total = parseInt(req.params.moins) + parseInt(req.params.plus);
//         res.send("Résultat = "  + req.params.total )
//     }
//     else if ( req.params.indice === '-'){
//         req.params.total = req.params.moins - req.params.plus;
//         res.send("Résultat = "  + req.params.total )
//     }
//     else if ( req.params.indice === 'division'){
//         req.params.total = req.params.moins / req.params.plus;
//         res.send("Résultat =  "  + req.params.total )
//     }
//
// });
//
// app.get('/division/:moins/:plus', isNumber, function (req,res){
//         req.params.total = req.params.moins / req.params.plus;
//         res.send("Résultat = "  + req.params.total )
// });
//
// app.get('/add', function (req, res) {
//     res.render('addition.ejs');
// })
// .post('/add', function (req, res) {
//     res.render('addition.ejs',{
//         num1: req.body.num1,
//         num2: req.body.num2,
//         result: (parseInt(req.body.num1) + parseInt(req.body.num2))
//     })
// });
//
// app.get('/sous', function (req, res) {
//     res.render('addition.ejs');
// })
// .post('/sous', function (req, res) {
//     res.render('addition.ejs',{
//             num1: req.body.num1,
//             num2: req.body.num2,
//             result: (parseInt(req.body.num1) - parseInt(req.body.num2))
//     })
// });
//
//




const mongoose = require('./loaders/mongo');
const studentService = require('./services/student');

app.get('/', function (req, res) {
    studentService.create(
        "Test LastName",
        "Test FirstName",
        25
    );
});

app.get('/crud', function (req, res) {
    res.render('crud.ejs');
})
.post('/crud', function (req, res) {
    studentService.create(
        req.body.lastname,
        req.body.firstname,
        req.body.age
    );
    res.render('crud.ejs');
});

app.get('/ListStudent', function (req,res) {
        studentService.findAll(function (students) {
            res.render('show.ejs',{studentList:students})
        })
});

app.get('/delete/:id',function (req,res) {
        studentService.remove(req.params.id)
        res.redirect('/ListStudent')
});


app.listen(3000, function(){
    console.log('Express started.')
});



