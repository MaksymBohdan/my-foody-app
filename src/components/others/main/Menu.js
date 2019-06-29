import React, { Component, Fragment } from 'react';
// import menu from '../../json/menu.json';
import MenuList from './MenuList';
import MenuFilter from './MenuFilter';

class Menu extends Component {
  state = {
    itemsArr: [],
    inputValue: '',
  };

  componentDidMount() {
    this.setState({
      // itemsArr: [menu],
    });
  }

  handleFilter = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleFilterItems = (value, items) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
  };

  render() {
    const { inputValue, itemsArr } = this.state;
    const filteredItems = this.handleFilterItems(inputValue, itemsArr);

    return (
      <Fragment>
        <MenuFilter inputValue={inputValue} handleFilter={this.handleFilter} />
        <MenuList filteredItems={filteredItems} />
      </Fragment>
    );
  }
}

export default Menu;
