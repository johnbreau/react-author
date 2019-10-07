import React from 'react';
import './AuthorQuiz.css';
import ClickyButtons from './ClickyButtons';

class AuthorQuiz extends React.Component {

  localClicker() {
    console.log('local clicker');
  }

  render() {
    return (
    <div className="AuthorQuiz">
      <div>AuthorQuiz</div>
      <button className="btn btn-secondary" onClick={() => this.localClicker()}>Click me</button>
      <ClickyButtons numberOfButtons={99}/>
    </div>
    )}
}

export default AuthorQuiz;
