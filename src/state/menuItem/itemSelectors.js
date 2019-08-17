const getMenuItem = state => state.menuItem.item;
const loading = state => state.menuItem.loading;
const error = state => state.menuItem.error;

export default { getMenuItem, loading, error };
