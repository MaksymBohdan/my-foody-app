const getCategories = state => state.menu.category.item;
const loading = state => state.menu.category.loading;
const error = state => state.menu.category.error;

export default { getCategories, loading, error };
