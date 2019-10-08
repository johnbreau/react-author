import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import './Bootstrap.css';
import {sample, shuffle} from 'underscore';

const authors = [
  {
    author: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn', 'The Adventures of Tom Sawyer', 'A Conneticut Yankee in King Arthurs Court']
  },
  {
    author: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Christine', 'The Stand', 'It', 'Skeleton Crew', 'Different Seasons']
  },
  {
    author: 'William Shakespere',
    imageUrl: 'images/authors/williamshakespere.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['MacBeth', 'Hamlet', 'The Tempest', 'Romeo and Juliet']
  },
  {
    author: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    author: 'JK Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    books: ["Harry Potter and the Sorcer's Stone"]
  },
  {
    author: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ["Great Expectations", 'David Copperfield', 'A Tale of Two Cities']
  }
];


function getTurnData(authors) {
  const allBooks = authors.reduce(function (p,c,i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4); 
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors
    .find((author) => author.books
    .some((title) => title === answer))
  }
}

const state = {
  turnData: 
    getTurnData(authors)
}

// function Events(props) {
//   const clickHandler = console.log;
//   return (<button onClick={clickHandler}>Make an Event</button>)
// }

ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));

// ReactDOM.render(<Events/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
