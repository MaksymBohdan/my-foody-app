// @flow
import React, { Component, createRef } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Avatar from '../Avatar/Avatar';
import s from '../../header/AppHeader.module.css';
import type {
  UserMenuProps,
  UserMenuState,
} from '../../../configs/flowTypes/module/user';

class UserMenu extends Component<UserMenuProps, UserMenuState> {
  containerRef: any = createRef<HTMLElement>();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps: UserMenuProps, nextState: UserMenuState) {
    const { isDropdownOpen } = this.state;
    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.remove('click', this.handleWindowClick);
  }

  handleWindowClick = (e: SyntheticEvent<*>) => {
    const { isDropdownOpen } = this.state;
    // $FlowFixMe
    const isTargetTypeOfLink = e.target.tagName.toLowerCase() === 'a';
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    if (
      (isDropdownOpen && !isTargetInsideContainer) ||
      (isDropdownOpen && isTargetTypeOfLink)
    ) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { name, avatar } = this.props;
    const { isDropdownOpen } = this.state;

    return (
      <div
        className={s.UserMenu}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <p className={s.UserName}>{name}</p>
        {isDropdownOpen && <Dropdown />}
      </div>
    );
  }
}

export default UserMenu;
