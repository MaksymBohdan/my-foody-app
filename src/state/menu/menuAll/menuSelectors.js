const getItems = state => state.menu.menuAll.items;
const loading = state => state.menu.menuAll.loading;
const error = state => state.menu.menuAll.error;

export default { getItems, loading, error };
