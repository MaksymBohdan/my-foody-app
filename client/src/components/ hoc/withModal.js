// @flow
import React, { Component, createRef } from 'react';
import type { AbstractComponent } from 'react';

import s from '../../modules/header/AppHeader.module.css';

const withModal = (WrappedComponent: AbstractComponent<*>) => {
  return class WithModal extends Component<*, {}> {
    backdropRef: any = createRef<HTMLElement>();

    componentDidMount() {
      window.addEventListener('click', this.handleBackdropClick);
      window.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
      window.removeEventListener('click', this.handleBackdropClick);
      window.removeEventListener('keyup', this.handleKeyUp);
    }

    handleBackdropClick = (e: SyntheticEvent<*>) => {
      const { onClose } = this.props;
      // $FlowFixMe
      const isTargetTypeOfBtn = e.target.tagName.toLowerCase() === 'button';
      const isTargetInsideContainer = this.backdropRef.current.contains(
        e.target,
      );

      if (!isTargetInsideContainer && !isTargetTypeOfBtn) onClose();
    };

    handleKeyUp = (e: KeyboardEvent) => {
      const { onClose } = this.props;

      if (e.keyCode === 27) onClose();
    };

    render() {
      const { onClose, ...props } = this.props;
      return (
        <div className={s.Backdrop}>
          <div className={s.ModalWindow} ref={this.backdropRef}>
            <WrappedComponent {...props} />;
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      );
    }
  };
};

export default withModal;
