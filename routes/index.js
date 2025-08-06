var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next){
  res.render('login')
});
router.get('/home', function(req, res, next){
  res.render('home')
});
router.get('/logout', function(req, res, next){
  res.render('logout')
});
module.exports = router;
console.log('http://127.0.0.1:3000')