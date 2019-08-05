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

import getCategoryFromProps from '../../../utils/menuUtils';

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

  render() {
    const { menu, loading, error, onDelete, categories } = this.props;
    const currentCategory = getCategoryFromProps(this.props);

    return (
      <React.Fragment>
        {loading && <Loader />}
        {error && <h2>Error</h2>}
        <CategorySelector
          options={categories}
          onChange={this.handleCategorySelector}
          value={currentCategory}
        />
        <MenuGrid {...this.props} items={menu} onDelete={onDelete} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menu: menuSelectors.getItems(state),
  loading: menuSelectors.loading(state),
  error: menuSelectors.error(state),
  categories: categorySelectors.getCategories(state),
  loadingCategory: categorySelectors.loading(state),
  errorCategory: categorySelectors.error(state),
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItemByCategory,
  onDelete: menuOperations.deleteItem,
  fetchCategories: categoryOperations.fetchCategories,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MenuGridContainer);
