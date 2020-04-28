import React, { Component } from "react";
import { render } from "react-dom";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

// TODO(#)s correspond to Code Next React Bootcamp's slides.

class App extends React.Component {
  constructor(props) {
    super(props);

    // TODO(#3) Update the state such that reactDevName
    // points to a string of your name.
    this.state = {
      reactDevName: "Solution",
      todos: []
    };

    // In React class components, we bind each event handler to
    // the instance. That way, when the event handler is called,
    // the 'this' variable is pointing to this instance. If we
    // skipped this step, then the 'this' variable would be
    // undefined.
    this.onTodoInputEnter = this.onTodoInputEnter.bind(this);
    this.onTodoListItemToggle = this.onTodoListItemToggle.bind(this);
    this.onTodoListItemRemove = this.onTodoListItemRemove.bind(this);

    // React does not need to know about the next ID.
    // We leave it outside of the state so that React
    // does not try to re-render the component when it changes.
    this.nextId = 0;
  }

  onTodoInputEnter(todoInputValue) {
    // Copy the this.state.todos array.
    const nextTodos = [...this.state.todos];

    // TODO(#5) Create a todo object, which has 3 properties:
    // id (number), text (string), and isComplete (boolean).
    const todo = {
      id: this.nextId++,
      text: todoInputValue,
      isComplete: false,
    };

    // TODO(#6) Add the todo to the nextTodos array.
    nextTodos.push(todo);

    // Update the state to trigger a reload.
    this.setState({
      ...this.state,
      todos: nextTodos
    });
  }

  onTodoListItemToggle(id) {
    // TODO(#10) Copy the this.state.todos array.
    // hint: see onTodoInputEnter
    const nextTodos = [...this.state.todos];

    // TODO(#11) Find the todo that matches the id.
    // If there is no matched todo, do nothing.
    // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const todo = nextTodos.find(todo => todo.id === id);
    if (!todo) {
      return
    }


    // TODO(#13) Update the matched todo's isComplete property
    // to be the opposite of what it is currently set.
    todo.isComplete = !todo.isComplete;

    // TODO(#14) Update the state to trigger a reload.
    // hint: see onTodoInputEnter
    this.setState({
      ...this.state,
      todos: nextTodos
    });
  }

  onTodoListItemRemove(id) {
    // TODO(#19) Use Array.prototype.filter to create a new
    // this.state.todos array that does *not* have a todo
    // that matches given id.
    // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const nextTodos = this.state.todos.filter(todo => todo.id !== id);

    // TODO(#20) Update the state to trigger a reload.
    this.setState({
      ...this.state,
      todos: nextTodos
    });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.reactDevName}'s Todos</h1>
        <TodoInput onEnter={this.onTodoInputEnter} />

        <br />

        <TodoList
          todos={this.state.todos}
          onTodoListItemToggle={this.onTodoListItemToggle/* TODO(#15) Use this.onTodoListItemToggle */}
          onTodoListItemRemove={this.onTodoListItemRemove/* TODO(#21) Use this.onTodoListItemRemove */}
        />

        <br />

        <pre className="alert alert-warning">
          this.state = {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
