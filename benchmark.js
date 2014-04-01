var React = require('react'),
    Benchmark = require('benchmark');


require('node-jsx').install();


var Home = require('./app/home.jsx');


var articles = [
  { id: 1, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
  { id: 2, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
  { id: 3, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
  { id: 4, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
  { id: 5, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
  { id: 6, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
  { id: 7, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' },
  { id: 8, title: 'testing', figure: 'https://i.chzbgr.com/maxW500/7894072832/hAFED0C29/', figureCaption: 'such wow', summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, dolore, cupiditate, voluptates libero recusandae culpa a ea repellendus accusamus ducimus est dolorem placeat perspiciatis vero quod voluptatum earum quasi temporibus.' }
];


var suite = new Benchmark.Suite();


suite.add('render', function () {
  React.renderComponentToString(Home({ articles: articles }));
});


suite.run();


console.log('Renders in', suite['0'].stats.mean * 1000, 'ms (mean)');
