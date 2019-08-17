import actions from './categoryActions';
import getAllCategories from '../../services/categoryService';

const fetchCategories = () => async dispatch => {
  dispatch(actions.fetchCategoriesRequest());
  try {
    const response = await getAllCategories();

    dispatch(actions.fetchCategoriesSuccess(response));
  } catch (error) {
    dispatch(actions.fetchCategoriesFailed(error));
  }
};

export default { fetchCategories };
