import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
import { connect } from 'react-redux';

import { Contact } from '../Contact';
import { Faq } from '../Faq';
import Home from '../Home';
import { MainLayout } from '../MainLayout';
import { NoMatch } from '../NoMatch';
import { Terms } from '../Terms';
import ProductPage from '../ProductPage/ProductPageContainer';
import Cart from '../Cart';
import { fetchProducts } from '../Product/ProductActions.js';


class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/faq'} component={Faq} />
            <Route exact path={'/terms'} component={Terms} />
            <Route exact path={'/cart'} component={Cart} />
            <Route exact path={'/productpage/:id'} component={ProductPage} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
