import { normalize } from 'normalizr';

import actions from './menuActions';
import * as API from '../../services/menuService';
import menuSchema from '../../services/schemas/menuSchema';

const fetchMenuItemByCategory = category => async dispatch => {
  dispatch(actions.fetchAllRequest());
  try {
    const response = await API.getMenuItemByCategory(category);
    const { entities } = await normalize(response, [menuSchema]);

    const normalizedMenu = {
      ids: Object.keys(entities.menu),
      entities: entities.menu,
    };

    dispatch(actions.fetchAllSuccess(normalizedMenu));
  } catch (error) {
    dispatch(actions.fetchAllFailed(error));
  }
};

export default { fetchMenuItemByCategory };
