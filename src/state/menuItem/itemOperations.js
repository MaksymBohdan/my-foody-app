// @flow
import actions from './itemActions';
import * as API from '../../services/menuService';
import type {
  Dispatch,
  ThunkAction,
} from '../../configs/flowTypes/state/operations';

const fetchSingleItem = (id: number): ThunkAction => async (
  dispatch: Dispatch,
) => {
  dispatch(actions.fetchSingleItemRequest());
  try {
    const response = await API.getMenuItemById(id);
    dispatch(actions.fetchSingleItemSuccess(response));
  } catch (error) {
    dispatch(actions.fetchSingleItemFailed(error));
  }
};

export default { fetchSingleItem };
