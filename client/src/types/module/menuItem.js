// @flow
import type { ContextRouter } from 'react-router-dom';
import type { Entity } from '../state/state';

export type MenuItemContainerProps = {
  ...ContextRouter,
  menuItem: Entity,
  loading: boolean,
  error: ?void,
  fetchMenuItem: (id: number) => void,
  id: number,
};

export type menuItemViewProps = {
  id: number,
  menuItem: Entity,
  handleGoBack: () => void,
};
