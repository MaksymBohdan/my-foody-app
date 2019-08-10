import actions from './menuActions';
import * as API from '../../../services/menuService';

const fetchMenuItemByCategory = category => async dispatch => {
  dispatch(actions.fetchAllRequest());
  try {
    const response = await API.getMenuItemByCategory(category);
    dispatch(actions.fetchAllSuccess(response));
  } catch (error) {
    dispatch(actions.fetchAllFailed(error));
  }
};

export default { fetchMenuItemByCategory };
