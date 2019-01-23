import React, { Component } from "react";

import './Sort.scss';

export class Sort extends Component {
  render() {
    return (
      <div>
        <h5 className='sort-header' >Sortuj:</h5>
        <div className="sort-list">
          <ul>Nazwa A-Z</ul>
          <ul>Nazwa Z-A</ul>
          <ul>Cena rosnąco</ul>
          <ul>Cena malejąco</ul>
        </div>
      </div>
    );
  }
}
