import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import DevTools from '../../utils/DevTools';

export class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <DevTools />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
