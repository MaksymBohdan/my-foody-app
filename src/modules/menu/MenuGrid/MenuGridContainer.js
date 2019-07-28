import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuGrid from './MenuGridView';
import Loader from '../../../components/Loader/Loader';
import { menuOperations, menuSelectors } from '../../../state/menu/menuAll';

class MenuGridContainer extends Component {
  componentDidMount() {
    const { fetchMenu } = this.props;
    fetchMenu();
  }

  render() {
    const { menu, loading, error, onDelete } = this.props;
    return (
      <React.Fragment>
        {loading && <Loader />}
        {error && <h2>Error</h2>}
        <MenuGrid items={menu} onDelete={onDelete} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menu: menuSelectors.getItems(state),
  loading: menuSelectors.loading(state),
  error: menuSelectors.error(state),
});

const mapDispatchToProps = {
  fetchMenu: menuOperations.fetchAllItems,
  onDelete: menuOperations.deleteItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuGridContainer);
