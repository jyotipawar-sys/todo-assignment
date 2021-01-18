import React from 'react';
import './Popover.css';
import history from '../history';
class Popover extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false
    };
  }

  handleClick() {
    if (!this.state.popupVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }
  
  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    
    this.handleClick();
  }

  render() {
    return (
      <div className="popover-container" ref={node => { this.node = node; }}>
      <button onClick={()=> history.push('./')} className="home">Home</button>
        <button className="c"
          onClick={this.handleClick}
        >
        I'm a popover!
        </button>
        {this.state.popupVisible && (
          <div
            className="popover"
          >
            Hi, how are you?
          </div>
         )}
      </div>
    );
  }
}


export default Popover;
