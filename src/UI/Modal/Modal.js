import React, { Component } from "react";
import classes from "./Modal.module.css";

class Modal extends Component {
  render() {
    let classList;
    if (this.props.show) {
      classList = [classes.modal];
    } else {
      classList = [classes.modal + classes.modal_not_shown];
    }
    return (
      <React.Fragment>
        {/* <Backdrop cancel={this.props.cancel} show={this.props.ordered} /> */}
        <div className={classList.join(" ")}>
          {this.props.show ? this.props.children : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
