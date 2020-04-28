import React, { Component } from "react";

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  onCheckboxChange(event) {
    // TODO(#16) Call this.props.onToggle with the todo ID.
    // hint: How can you access the todo ID?
    this.props.onToggle(this.props.todo.id);
  }

  onRemoveClick(event) {
    // TODO(#22) Call this.props.onRemove with the todo ID.
    // hint: How can you access the todo ID?
    this.props.onRemove(this.props.todo.id);
  }

  render() {
    const id = `todo-id-${this.props.todo.id}`;

    let className = "list-group-item d-flex justify-content-between align-items-center";
    if (this.props.todo.isComplete) {
      className += " list-group-item-success";
    }

    return (
      <li className={className}>
        <div class="form-check form-check-inline">
          <input
            id={id}
            className="form-check-input"
            type="checkbox"
            checked={this.props.todo.isComplete/* TODO(#17) Use this.props.todo.isComplete */}
            onChange={this.onCheckboxChange/* TODO(#18) Use this.onCheckboxChange */}
          />
          <label for={id} className="form-check-label">
            {this.props.todo.text}
          </label>
        </div>
        <button
          className="btn btn-danger btn-sm"
          onClick={this.onRemoveClick/* TODO(#23) Use the this.onRemoveClick */}
        >
          remove
        </button>
      </li>
    );
  }
}
