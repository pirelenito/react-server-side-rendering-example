var React = require('react'),
    express = require('express'),
    ejs = require('ejs'),
    path = require('path'),
    browserify = require('connect-browserify');

require('node-jsx').install();


var Home = require('../shared/home.jsx'),
    articleService = require('./article_service');


var app = express();


app.set('views', __dirname);
app.engine('ejs', ejs.renderFile);


app.use('/app.js', browserify({
  entry: path.join(__dirname, '../client/app.js'),
  transforms: ['reactify']
}));


app.get('/articles', function (req, res) {
  articleService.fetch(function (articles) {
    res.json(articles);
  });
});


app.get('/', function (req, res) {
  articleService.fetch(function (articles) {
    var string = React.renderComponentToString(Home({ articles: articles }));

    res.render('index.ejs', {
      main: string
    });
  });
});


app.listen(3000);
