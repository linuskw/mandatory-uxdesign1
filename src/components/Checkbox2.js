import React from 'react';
import './Checkbox2.css';

class Checkbox2 extends React.Component {

  render() {
    return(
      <>
        <div className="checkContainer">
          <label className="checkbox">
            <input type="checkbox"/>
            <span>1</span>
          </label>
          <label className="checkbox">
            <input type="checkbox"/>
            <span>2</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" disabled/>
            <span>Disabled</span>
          </label>
        </div>
      </>
    )
  }
}

export default Checkbox2;
