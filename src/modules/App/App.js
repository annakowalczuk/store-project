import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';


import { Contact } from '../Contact';
import { Faq } from '../Faq';
import { Home } from '../Home';
import { MainLayout } from '../MainLayout';
import { NoMatch } from '../NoMatch';
import { Products } from '../Products';
import { Terms } from '../Terms';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/faq'} component={Faq} />
            <Route exact path={'/products'} component={Products} />
            <Route exact path={'/terms'} component={Terms} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
