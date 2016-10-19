var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var user = require('./routes/index');
var mahasiswa = require('./routes/mahasiswa');
var jurusan = require('./routes/jurusan');

var koneksi = require('express-myconnection');
var mysql = require('mysql');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    koneksi(mysql, {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'akademik'
    }, 'single')
);

// Routes User
app.use('/', user);
app.use('/form', user);
app.use('/tables', user);

// Routes Mahasiswa
app.get('/mahasiswa', mahasiswa.detilMhs);
app.get('/mahasiswa/tambah', mahasiswa.tambahMhs);
app.post('/mahasiswa/tambah', mahasiswa.tambahMhsSimpan);
app.get('/mahasiswa/ubah/:nim', mahasiswa.ubahMhs);
app.post('/mahasiswa/ubah/:nim', mahasiswa.ubahMhsSimpan);
app.get('/mahasiswa/hapus/:nim', mahasiswa.hapusMhs);

// Routes Jurusan
app.get('/jurusan', jurusan.detilJurusan);
app.get('/jurusan/tambah', jurusan.tambahJurusan);
app.post('/jurusan/tambah', jurusan.tambahJurusanSimpan);
app.get('/jurusan/ubah/:kodeJurusan', jurusan.ubahJurusan);
app.post('/jurusan/ubah/:kodeJurusan', jurusan.ubahJurusanSimpan);
app.get('/jurusan/hapus/:kodeJurusan', jurusan.hapusJurusan);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;