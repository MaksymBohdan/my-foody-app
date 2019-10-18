// @flow
import type { State } from './state';
import type {
  ErrorAction,
  CategoryFetchSuccessAction,
  CategoryRequestAction,
  FetchAllRequestAction,
  FetchAllSuccessAction,
  FetchSingleItemRequestAction,
  FetchSingleItemSuccessAction,
} from './actions';

export type Action =
  | CategoryRequestAction
  | CategoryFetchSuccessAction
  | ErrorAction
  | FetchAllRequestAction
  | FetchAllSuccessAction
  | FetchSingleItemRequestAction
  | FetchSingleItemSuccessAction;

export type GetState = () => State;
type PromiseAction = Promise<Action>;
// eslint-disable-next-line no-use-before-define
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>,
) => any;
