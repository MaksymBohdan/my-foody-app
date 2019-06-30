import React, { Component } from 'react';
import MenuGrid from './MenuGridView';
import Loader from '../../../components/Loader/Loader';
import * as API from '../../../services/api';

export default class MenuGridContainer extends Component {
  state = { menu: [], loading: false, error: null };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const menu = await API.getAllMenuItems();

      this.setState({ menu, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { menu, loading, error } = this.state;
    return (
      <React.Fragment>
        {loading && <Loader />}
        {error && <h2>Error</h2>}
        <MenuGrid items={menu} />
      </React.Fragment>
    );
  }
}

// handleShowMoreInfo = id => {
//   API.getMenuItemById(id).then(item => item);
// };

// onShowMoreInfo={this.handleShowMoreInfo}

/* <button type="button" onClick={this.handleAddMenuItem}>
добавить элемент меню
</button> */
