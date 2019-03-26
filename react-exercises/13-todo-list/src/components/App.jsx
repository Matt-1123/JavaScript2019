/**
 * Complete this Todo List app.
 * Your input and form should be controlled. This means when the user types text in the textbox,
 * it should be stored in state and submitting the form should not refresh the page.
 * When the user clicks on the "Add" button, the text in the textbox should be placed in the Todo List.
 * You will need to pass the text down to the list "ListItem" component.
 * When the user clicks on the "X" in the ListItem, it should be deleted from the Todo list.
 */

import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

class App extends Component {
  state = {
    textInput: "",
    todos: []
  }
 
  handleSubmit = e => {
    e &&  e.preventDefault();
    if(!this.state.textInput){
      return alert("A Todo cannot be blank.  We wish life were that easy, too.")
    }
    this.setState({ todos: [...this.state.todos, this.state.textInput] });
    this.setState({ textInput: "" });
  }

  updateInputValue = e => {
    this.setState({
      textInput: e.target.value
    });
  }

  // Remove the item with the same index as the item the user clicks delete on
  handleDelete = index => {
    console.log("delete");
    console.log(`delete index: ${index}`)
    const newTodos = this.state.todos.filter((item, i) => {
      return index !== i;
    });
    return this.setState({ todos: newTodos });
  }
  
  render() {
    return (
      <div className="container mt-4">
        <header className="App-header">
          <h1>Todo List</h1>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text"
                aria-label="Enter text"
                aria-describedby="button-add"
                value={this.state.textInput}
                onChange={e => this.updateInputValue(e)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="button-add"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </header>
        <ul className="list-group">
          {this.state.todos.map((item, index) => {
            return (
              <ListItem
                index={index}
                key={`key-${index}`}
                delete={this.handleDelete}
              >
                {item}
              </ListItem>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
