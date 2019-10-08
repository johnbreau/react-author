import React from 'react';
import Turn from './Turn';
import Continue from './Continue';
import Hero from './Hero';
import Footer from './Footer';
import './AuthorQuiz.css';
import './Bootstrap.css';
import ClickyButtons from './ClickyButtons';
import EvenCounter from './EvenCounter';

class AuthorQuiz extends React.Component {
  localClicker() {
    console.log('local clicker');
  }

  render() {
    return (
    <div className="container-fluid">
      <EvenCounter onEvenClick={(data) => {console.log(`even ${data}`);}}/>
      <Hero />
      <Turn {...this.props} />
      <Continue />
      <Footer />
      <div>AuthorQuiz</div>
      <button className="btn btn-secondary" onClick={() => this.localClicker()}>Click me</button>
      <ClickyButtons numberOfButtons={99}/>
    </div>
    )}
}

export default AuthorQuiz;
