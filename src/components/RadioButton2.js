import React from 'react';
import './RadioButton2.css';

class RadioButton2 extends React.Component {

  render(){
    return(
      <>
        <div className="container">
          <ul>
            <li>
              <input type="radio" id="first" name="selector"/>
              <label htmlFor="f-option">1</label>
              <div className="check"></div>
            </li>
            <li>
              <input type="radio" id="second" name="selector"/>
              <label htmlFor="s-option">2</label>
              <div className="check"></div>
            </li>
            <li>
              <input type="radio" id="third" name="selector" disabled/>
              <label htmlFor="t-option">Disabled</label>
              <div className="check"></div>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default RadioButton2;
