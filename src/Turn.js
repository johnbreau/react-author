import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './Bootstrap.css';
import './AuthorQuiz.css';

class Turn extends React.Component {

  render() {
    return (
      <div className="row turn" style={{backgroundColor: "white"}}>
        <div className="col-4 offset-1">
          <img src={this.props.turnData.author.imageUrl} className="authorImage" alt="the author"/>
        </div>
        <div className="col-6 bookList">
          {this.props.turnData.books.map((title) => <Book title={title} key={title}/>)}
        </div>
      </div>
    )};
}

Turn.propTypes = {
  books: PropTypes.array,
  author: PropTypes.string,
}

export default Turn;