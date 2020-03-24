import React from 'react';
import './TextField.css';

import TextField from './TextField.js';
import TextFieldDisabled from './TextFieldDisabled.js';

class TextFields extends React.Component {


  render() {
    return(
      <>
        <TextField />
        <br/><br/>
        <TextFieldDisabled />
      </>
    )
  }
}

export default TextFields;
