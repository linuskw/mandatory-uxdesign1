import React from 'react';
import './RadioButton2.css';

class RadioButton2 extends React.Component {

  render(){
    return(
      <>
        <div className="container">
          <ul>
            <li>
              <input type="radio" id="first" name="selector" />
              <label htmlFor="first">1</label>
              <div className="check"></div>
            </li>
            <li>
              <input type="radio" id="second" name="selector"/>
              <label htmlFor="second">2</label>
              <div className="check"></div>
            </li>
            <li>
              <input type="radio" id="third" name="selector" disabled/>
              <label htmlFor="third">Disabled</label>
              <div className="check"></div>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default RadioButton2;
