import React, { Component } from "react";

/***
 *  As a user, I should be able to click on the button to hide the text.
 *  Clicking the button a second try unhides the text.
 */

class App extends Component {
  state = {
    showText: true
  };

  toggle = () => {
    this.setState({ showText: !this.state.showText });
  };

  render() {
    return (
      <div className="container pt-4">
        <button onClick={this.toggle} type="button" class="btn btn-primary btn-lg mb-2">
          Show / Hide Text
        </button>
        {this.state.showText ? <h1>Now you see me!</h1> : null}
        
      </div>
    );
  }
}

export default App;
