import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import { exportAllDeclaration } from '@babel/types';

describe('setting up testing', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
})
