import React, { Component } from "react";
import { debounce } from "lodash";

class WidgetText extends Component {
  state = { text: "" };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <textarea value={this.state.text} />
      </div>
    );
  }

  //If we type in the input box the will immediately mirror in the text area.
}

class App extends Component {
  state = { show: true };
  handleToggle = debounce(() => {
    this.setState((prevState) => ({ show: !prevState.show }));
  }, 500);

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Togggle</button>
        {this.state.show ? <WidgetText /> : null}
      </div>
    );
  }
}
export default App;
