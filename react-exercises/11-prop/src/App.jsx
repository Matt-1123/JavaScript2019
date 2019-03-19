import React, { Component } from "react";
import './App.css'
import IsUserLoggedIn from './components/IsUserLoggedIn'

class App extends Component {
  render() {
    const Users = [
      {
        name: "Matt",
        isUserLoggedIn: true
      },
      {
        name: "Kelly",
        isUserLoggedIn: false
      },
      {
        name: "Maggie",
        isUserLoggedIn: true
      },
    ];
    return (
      <div className="App">
        {/* Add IsUserLoggedIn component here with props */}
        <IsUserLoggedIn users={Users} />
      </div>
    );
  }
}

export default App;
