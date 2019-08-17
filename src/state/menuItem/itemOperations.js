import actions from './itemActions';
import * as API from '../../services/menuService';

const fetchSingleItem = id => async dispatch => {
  dispatch(actions.fetchSingleItemRequest());
  try {
    const response = await API.getMenuItemById(id);
    dispatch(actions.fetchSingleItemSuccess(response));
  } catch (error) {
    dispatch(actions.fetchSingleItemFailed(error));
  }
};

export default { fetchSingleItem };
