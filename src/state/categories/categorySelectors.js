const getCategories = state => state.category.item;
const loading = state => state.category.loading;
const error = state => state.category.error;

export default { getCategories, loading, error };
