import React from "react";

class Header extends React.Component {
  render() {
    return (
      <p>
        Edit <code>src/App.js</code> and save to reload.
        {this.props.til} {this.props.ti} {this.props.num}
        {this.props.myfun(1, 2)}
        {this.props.ofun(1, 66)}
      </p>
    );
  }
}

export default Header;
