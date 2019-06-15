import React, { Component } from 'react';
import MenuGrid from './MenuGrid';
import * as API from '../../services/api';

class MenuPage extends Component {
  state = { menu: [] };

  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
  }

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(res => {
      if (!res) return;

      this.setState(prev => ({
        menu: prev.menu.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getMenuItemById(id).then(item => item);
  };

  handleAddMenuItem = () => {
    const item = {
      name: `Name ${Date.now()}`,
      price: Math.random(),
      image: `https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=format%2Ccompress&cs=tinysrgb&h=480&w=640`,
    };

    API.addMenuItem(item).then(newMenuItem => {
      this.setState(prev => ({
        menu: [...prev.menu, newMenuItem],
      }));
    });
  };

  render() {
    const { menu } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleAddMenuItem}>
          добавить элемент меню
        </button>
        <MenuGrid
          items={menu}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
      </div>
    );
  }
}

export default MenuPage;
