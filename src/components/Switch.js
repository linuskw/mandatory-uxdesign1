import React from 'react';
import './Switch.css';

class Switch extends React.Component {

  render(){
    return(
      <>
        <div className="workingSwitch">
          <input type="checkbox" id="idSwitch1" name="set-name" className="switchInput" />
  	       <label htmlFor="idSwitch1" className="switchLabel">Switch</label>
        </div>
        <div className="disabledSwitch">
          <input type="checkbox" id="idDisabled" name="set-name" className="switchInput" disabled />
  	       <label htmlFor="idDisabled" className="switchLabel">Disabled Switch</label>
        </div>
      </>
    )
  }
}

export default Switch;
