import React from "react";

export default class Count extends React.Component {
  state = {
    num: 100,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  countButtonH = () => {
    console.log(this.state);
    this.setState({
      count: this.state.count + 1,
      num: this.state.num - 1,
    });
  };

  render() {
    return (
      <div>
        <div>
          count: {this.state.count} num: {this.state.num}
        </div>
        <button onClick={this.countButtonH}>increment</button>
      </div>
    );
  }
}
