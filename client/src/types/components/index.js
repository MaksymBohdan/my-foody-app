// @flow
// categorySelector
import type { ContextRouter } from 'react-router-dom';
import type { AbstractComponent } from 'react';

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

// SignUp
export type SignUpState = {
  name: string,
  email: string,
  phone: string,
  password: string,
};

export type SignUpProps = {
  signUp: (state: SignUpState) => void,
};

// App
export type AppProps = {
  refreshUser: () => void,
  ...ContextRouter,
};

// AppHeader
export type AppHeaderProps = {
  isAuthenticated: boolean,
  user: {
    id: string,
    name: string,
    email: string,
  },
  signOut: () => void,
};

// Dropdown
export type DropdownProps = {
  signOut: () => void,
};

// ProtectedRoute
export type ProtectedRouteProps = {
  component: AbstractComponent<*>,
  redirectTo: string,
  isAuthenticated: boolean,
};

// WithAuth
export type WithAuthProps = {
  isAuthenticated: boolean,
  ...ContextRouter,
};

// AuthNavigation
export type AuthNavigationP = Array<{ name: string, path: string }>;
