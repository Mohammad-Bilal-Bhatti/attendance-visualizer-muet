import React, { Component } from "react";
class Spinner extends Component {
  state = {
    statusLoading: this.props.loading
  };
  render() {
    return this.state.statusLoading ? (
      <div className="spinner-border text-info mt-3" role="status"></div>
    ) : (
      ""
    );
  }
}

export default Spinner;
