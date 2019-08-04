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
    const {
      location: { search },
    } = this.props;
    const currentCategory = getCategoryFromProps(search);

    this.handlePushWithNoCategory(currentCategory);

    this.fetchCategoryAndMenuItem(currentCategory);
  }

  fetchCategoryAndMenuItem = category => {
    const { fetchMenuItems, fetchCategories } = this.props;

    Promise.all([fetchMenuItems(category), fetchCategories()]);
  };

  handleCategorySelector = category => {
    const { location, history } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${category}`,
    });
  };

  handlePushWithNoCategory = category => {
    const { history, location } = this.props;

    if (category) return;

    history.push({
      pathname: location.pathname,
      search: `category=all`,
    });
  };

  render() {
    const {
      menu,
      loading,
      error,
      onDelete,
      categories,
      location: { search },
    } = this.props;
    const currentCategory = getCategoryFromProps(search);

    return (
      <React.Fragment>
        {loading && <Loader />}
        {error && <h2>Error</h2>}
        <CategorySelector
          options={categories}
          onChange={this.handleCategorySelector}
          value={currentCategory}
        />
        <MenuGrid items={menu} onDelete={onDelete} />
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
