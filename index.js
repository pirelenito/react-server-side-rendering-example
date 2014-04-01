var React = require('react'),
    express = require('express');

require('node-jsx').install();


var Home = require('./app/home.jsx');


var app = express();


app.get('/', function (req, res) {
  var articles = [
    { id: 1, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
    { id: 2, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
    { id: 3, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
    { id: 4, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' }
  ];

  var string = React.renderComponentToString(Home({ articles: articles }));
  res.send(string);
});


app.listen(3000);
