const getMenuItem = state => state.menu.menuItem.item;
const loading = state => state.menu.menuItem.loading;
const error = state => state.menu.menuItem.error;

export default { getMenuItem, loading, error };
