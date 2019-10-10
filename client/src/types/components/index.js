// @flow
// categorySelector
type OptionCategorySelector = { id: number, name: string };

export type PropsCategorySelector = {
  options: Array<OptionCategorySelector>,
  onChange: (value: string) => void,
  value: string | void,
};

// inputSearch
export type PropsInputSearch = {
  onChange: (evt: SyntheticEvent<HTMLInputElement>) => void,
  value: string,
};

// Logo
export type PropsLogo = {
  image: string,
  width?: string,
  height?: string,
};

type OptionNavItems = Array<{ name: string, path: string }>;

export type PropsNavItems = { navItems: OptionNavItems };

// SignIn
export type StateSignIn = {
  email: string,
  password: string,
};

export type PropsSignIn = {
  signIn: (state: StateSignIn) => void,
};
