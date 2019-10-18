// @flow
export type UserMenuState = {
  isDropdownOpen: boolean,
};

export type UserMenuProps = {
  avatar: string,
  name: string,
  signOut: () => void,
};
