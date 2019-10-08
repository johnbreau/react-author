import React from 'react';
import './Bootstrap.css';
import './AuthorQuiz.css';

class Book extends React.Component {

  render() {
    return(
      <div className="answer">
        <h5>{this.props.title}</h5>
      </div>
      )}
}

export default Book;
