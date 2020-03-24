import React from 'react';
import './Main.css';

import TextFields from './TextFields.js';
import Switch from './Switch.js';
import Checkbox2 from './Checkbox2.js'
import RadioButton2 from './RadioButton2.js';

class Main extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      component: "",
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    this.setState({ component: e.target.className })
  }

  render(){
    return(
      <>
        <div className="mainWrap">
          <h1>Demo Page</h1>
          <div className="buttons">
            <button className="buttonText" onClick={ this.onClick }>Text Field</button>
            <button className="buttonSwitch" onClick={ this.onClick }>Switch</button>
            <button className="buttonRadio" onClick={ this.onClick }>Radio Button</button>
            <button className="buttonCheck" onClick={ this.onClick }>CheckBox</button>
          </div>
          <div className="demoPageDiv">
            { this.state.component === "buttonText" ? <TextFields /> :
              this.state.component === "buttonSwitch" ? <Switch /> :
              this.state.component === "buttonRadio" ? <RadioButton2 /> :
              this.state.component === "buttonCheck" ? <Checkbox2 /> :
              null}
          </div>
        </div>
      </>
    )
  }
}

export default Main;
