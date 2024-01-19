import React, { Component } from 'react';
class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
 handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
render() {
    return (
      <div>
        <h2>Counter (Class-Based Component)</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}className='bg-green-700'>Increment</button>
        <button onClick={this.handleDecrement}className='bg-red-700'>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;