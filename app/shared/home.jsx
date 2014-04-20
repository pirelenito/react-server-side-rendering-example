/** @jsx React.DOM */
var React = require('react'),
    _ = require('underscore'),
    ArticlePreview = require('./article_preview.jsx');


var Home = React.createClass({
  render: function () {
    var articles = this.props.articles;

    return (
      <div>
        <h1>Ultimas noticias</h1>
        <ol>
          {
            _(articles).map(function (article) {
              return <li key={article.id}><ArticlePreview article={article} /></li>;
            })
          }
        </ol>
      </div>
    );
  }
});


module.exports = Home;
