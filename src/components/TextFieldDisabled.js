import React from 'react';
import './TextField.css';

class TextFieldDisabled extends React.Component {


  render() {
    return(
      <>
        <div id="form_group_disabled">
          <input type="text" id="disabled" className="form_field" placeholder="Text Field" disabled />
          <label htmlFor="disabled" className="form_label">Text Field</label>
        </div>
      </>
    )
  }
}

export default TextFieldDisabled;
