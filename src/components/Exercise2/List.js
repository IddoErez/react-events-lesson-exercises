import React, { Component } from 'react';
import Contact from "./Contact"

class List extends Component {
  render() {
    return (
      <div >
        {this.props.contacts.map(c=> <Contact key={Math.random()} displayConvo={this.props.displayConvo} name={c}/>)}
      </div>
    );
  }
}

export default List;
