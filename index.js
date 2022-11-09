var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send (
        "<h2>Kuis Ulang (Remedial) Sesi 21 - Tugas NodeJS (2) </h2><hr><br> Dzaru Rizky Fathan Fortuna (HSB FSD #3) <br><br><br> <small>Program Running Completly</small>"
    );
});


app.listen(3009);