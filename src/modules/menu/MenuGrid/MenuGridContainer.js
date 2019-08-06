import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import MenuGrid from './MenuGridView';
import Loader from '../../../components/Loader/Loader';
import CategorySelector from '../../../components/CategorySelector/CategorySelector';

import { menuOperations, menuSelectors } from '../../../state/menu/menuAll';
import {
  categoryOperations,
  categorySelectors,
} from '../../../state/menu/categories';
import {
  inputSearchActions,
  inputSearchSelectors,
} from '../../../state/menu/inputSearch';

import getCategoryFromProps from '../../../utils/menuUtils';
import InputSearch from '../../../components/InputSearch/InputSearch';

class MenuGridContainer extends Component {
  componentDidMount() {
    const { fetchMenuItems, fetchCategories } = this.props;
    const currentCategory = getCategoryFromProps(this.props);

    fetchMenuItems(currentCategory);
    fetchCategories();
  }

  componentDidUpdate(prevProps) {
    const { fetchMenuItems } = this.props;
    const prevCategoty = getCategoryFromProps(prevProps);
    const currentCategory = getCategoryFromProps(this.props);

    if (prevCategoty === currentCategory) return;

    fetchMenuItems(currentCategory);
  }

  handleCategorySelector = category => {
    const { location, history } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${category}`,
    });
  };

  onInputChange = event => {
    const { handleInputSearch } = this.props;
    handleInputSearch(event.target.value);
  };

  render() {
    const {
      filteredMenuItems,
      loading,
      error,
      onDelete,
      categories,
      searchValue,
    } = this.props;
    const currentCategory = getCategoryFromProps(this.props);

    return (
      <React.Fragment>
        {loading && <Loader />}
        {error && <h2>Error</h2>}
        <InputSearch onChange={this.onInputChange} value={searchValue} />
        <CategorySelector
          options={categories}
          onChange={this.handleCategorySelector}
          value={currentCategory}
        />
        <MenuGrid
          {...this.props}
          items={filteredMenuItems}
          onDelete={onDelete}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  filteredMenuItems: menuSelectors.getFilteredItems(state),
  loading: menuSelectors.loading(state),
  error: menuSelectors.error(state),
  categories: categorySelectors.getCategories(state),
  loadingCategory: categorySelectors.loading(state),
  errorCategory: categorySelectors.error(state),
  searchValue: inputSearchSelectors.getSearchValue(state),
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItemByCategory,
  onDelete: menuOperations.deleteItem,
  fetchCategories: categoryOperations.fetchCategories,
  handleInputSearch: inputSearchActions.inputSearch,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MenuGridContainer);
