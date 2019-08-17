import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';

import MenuGrid from './MenuGridView';
import Loader from '../../../components/Loader/Loader';
import CategorySelector from '../../../components/CategorySelector/CategorySelector';

import { menuOperations, menuSelectors } from '../../../state/menuAll';
import {
  categoryOperations,
  categorySelectors,
} from '../../../state/categories';
import {
  inputSearchActions,
  inputSearchSelectors,
} from '../../../state/inputSearch';
import { cartActions } from '../../../state/cart';

import InputSearch from '../../../components/InputSearch/InputSearch';

class MenuGridContainer extends Component {
  componentDidMount() {
    const { fetchMenuItems, fetchCategories } = this.props;
    const currentCategory = this.getCategoryFromProps(this.props);

    fetchMenuItems(currentCategory);
    fetchCategories();
  }

  componentDidUpdate(prevProps) {
    const { fetchMenuItems } = this.props;
    const prevCategoty = this.getCategoryFromProps(prevProps);
    const currentCategory = this.getCategoryFromProps(this.props);

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

  getCategoryFromProps = props => {
    const {
      location: { search },
    } = props;

    return queryString.parse(search).category;
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
      categories,
      searchValue,
      addToCart,
    } = this.props;
    const currentCategory = this.getCategoryFromProps(this.props);

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
          addToCart={addToCart}
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
  fetchCategories: categoryOperations.fetchCategories,
  handleInputSearch: inputSearchActions.inputSearch,
  addToCart: cartActions.addToCart,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MenuGridContainer);
