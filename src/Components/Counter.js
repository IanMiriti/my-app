import React, { Component } from 'react'
import updatedComp from './HigherOrder';
export class Counter extends Component {
 constructor(props) {
    super(props)
  
    this.state = {
       count:0
    };
  }
  incrementCount=() =>{
     this.setState({count: this.state.count + 1});

  };
  render() {
    const {count} =this.state;
    return (
      <div>
        <button onMouseEnter={this.incrementCount}> {this.props.name}incremented to {count}</button>
      </div>
    )
  }
}

export default updatedComp(Counter); 