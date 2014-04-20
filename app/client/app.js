var React = require('react'),
    Home = require('../shared/home.jsx'),
    articleService = require('./article_service');


setTimeout(function () {
  console.log('react render');

  articleService.fetch(function (articles) {
    React.renderComponent(Home({ articles: articles }), document.getElementById('main'));
  });

}, 5000);


console.log('booting!');
