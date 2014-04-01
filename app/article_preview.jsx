/** @jsx React.DOM */

var React = require('react');


var ArticlePreview = React.createClass({
  render: function () {
    var article = this.props.article;

    return (
      <article>
        <figure>
          <img src={article.figure} alt=""/>
          <figcaption>{article.figureCaption}</figcaption>
        </figure>

        <h1>{article.title}</h1>
        <p>{article.summary}</p>
        <a href={article.url}></a>
      </article>
    );
  }
});


module.exports = ArticlePreview;
