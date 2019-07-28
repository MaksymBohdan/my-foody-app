import actions from './menuActions';
import * as API from '../../../services/menuService';

const fetchAllItems = () => async dispatch => {
  dispatch(actions.fetchAllRequest());
  try {
    const response = await API.getAllMenuItems();
    dispatch(actions.fetchAllSuccess(response));
  } catch (error) {
    dispatch(actions.fetchAllFailed(error));
  }
};

const deleteItem = id => async dispatch => {
  dispatch(actions.deleteRequest());
  try {
    const response = await API.deleteMenuItem(id);
    if (response) dispatch(actions.deleteSuccess(id));
  } catch (error) {
    dispatch(actions.deleteFailed(error));
  }
};

export default { fetchAllItems, deleteItem };
