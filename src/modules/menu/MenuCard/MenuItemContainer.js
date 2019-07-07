import React, { Component } from 'react';

import MenuItemView from './MenuItemView';
import Loader from '../../../components/Loader/Loader';

import * as API from '../../../services/menuService';

export default class MenuItemContainer extends Component {
  state = {
    menuItem: null,
    error: null,
    loading: null,
  };

  // getItemById
  async componentDidMount() {
    const { id } = this.props;
    this.setState({
      loading: true,
    });

    try {
      const menuItem = await API.getMenuItemById(id);

      this.setState({ menuItem, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { id } = this.props;
    const { menuItem, loading, error } = this.state;

    return (
      <React.Fragment>
        {loading && <Loader />}
        {error && <h2>Error</h2>}
        <MenuItemView id={id} menuItem={menuItem} />;
      </React.Fragment>
    );
  }
}
