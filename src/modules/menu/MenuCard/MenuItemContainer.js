import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import MenuItemView from './MenuItemView';
import Loader from '../../../components/Loader/Loader';
import {
  menuItemOperations,
  menuItemSelectors,
} from '../../../state/menu/menuItem';

class MenuItemContainer extends Component {
  componentDidMount() {
    const { id, fetchMenuItem } = this.props;
    fetchMenuItem(id);
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    const { state } = location;

    if (state) return history.push(state.from);

    return history.push({
      pathname: '/menu',
      search: '?category=all',
    });
  };

  render() {
    const { menuItem, loading, error, id } = this.props;

    return (
      <React.Fragment>
        {loading && <Loader />}
        {error && <h2>Error</h2>}
        <MenuItemView
          id={id}
          menuItem={menuItem}
          handleGoBack={this.handleGoBack}
        />
        ;
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menuItem: menuItemSelectors.getMenuItem(state),
  loading: menuItemSelectors.loading(state),
  error: menuItemSelectors.error(state),
});

const mapDispathToProps = {
  fetchMenuItem: menuItemOperations.fetchSingleItem,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispathToProps,
  ),
)(MenuItemContainer);
