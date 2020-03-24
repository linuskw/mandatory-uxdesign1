import React from 'react';
import './TextField.css';

var input = document.querySelector("div");

class TextField extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      focus: false,
    }

    this.inputClick = this.inputClick.bind(this);
    this.bodyClick = this.bodyClick.bind(this);
  }

  componentDidMount(){
    document.addEventListener("click", this.bodyClick);
    input.addEventListener("click", this.inputClick);
  }

  componentWillUnmount(){
    document.removeEventListener("click", this.bodyClick);
    input.removeEventListener("click", this.inputClick);
  }

  inputClick(){
    if (!this.state.focus) {
      this.setState({ focus: true })
    }
  }

  bodyClick(e){
    if (e.target.className !== "text") {
      this.setState({ focus: false })
    }
  }


  render() {
    return(
      <>
        <div id={ this.state.focus ? "form_group_focused" : "form_group_unfocused" }>
          <input type="text" id="text" className="form_field" placeholder="Text Field" />
          <label htmlFor="text" className="form_label">Text Field</label>
        </div>
      </>
    )
  }
}

export default TextField;
