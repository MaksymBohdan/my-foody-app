import React, { Component } from 'react';
import s from './AppHeader.module.css';

class Modal extends Component {
  componentDidMount() {}

  render() {
    const { onClose } = this.props;
    return (
      <div className={s.Backdrop}>
        <div className={s.ModalWindow}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur id veritatis rem repellendus deserunt odit aspernatur
            nihil doloribus odio atque.
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
