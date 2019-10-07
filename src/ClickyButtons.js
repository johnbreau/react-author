import React from 'react';
import './AuthorQuiz.css';
import PropTypes from 'prop-types';
import lodash from 'lodash';

class ClickyButtons extends React.Component {

  makeButton = v => {
    return (
    <button className="btn btn-light" key={v} id={v} onClick={event => console.log(event.target.id)}>{v}</button>
    )
  }

  render() {
    return (
    <div>
    {lodash.range(1, this.props.numberOfButtons + 1).map(this.makeButton)}
    </div>
    )}
}

ClickyButtons.propTypes = {
  numberOfButtons: PropTypes.number,
}

export default ClickyButtons;
