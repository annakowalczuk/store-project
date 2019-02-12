import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import DevTools from '../../utils/DevTools';

export class MainLayout extends React.Component {
  render() {
    return (
      <div>
        {(process.env.NODE_ENV === 'production') ? null : <DevTools />}
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
