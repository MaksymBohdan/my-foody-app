// @flow
import actions from './categoryActions';
import getAllCategories from '../../services/categoryService';
import type {
  Dispatch,
  ThunkAction,
} from '../../configs/flowTypes/state/operations';

const fetchCategories = (): ThunkAction => async (dispatch: Dispatch) => {
  dispatch(actions.fetchCategoriesRequest());
  try {
    const response = await getAllCategories();

    dispatch(actions.fetchCategoriesSuccess(response));
  } catch (error) {
    dispatch(actions.fetchCategoriesFailed(error));
  }
};

export default { fetchCategories };
