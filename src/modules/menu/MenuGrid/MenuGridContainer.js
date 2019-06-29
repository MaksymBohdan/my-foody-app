import React, { Component } from 'react';
import MenuGrid from './MenuGrid';
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
        {loading && <h1>loading</h1>}
        {error && <h1>Error</h1>}
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
