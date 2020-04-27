import React from "react";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    // TODO(#5) Update the state such that this.state.value
    // is set to the input's value. You can access the
    // input value by using event.target.value
  }

  /**
   * Determines if a user pressed enter and validates
   * the input before calling the onEnter prop.
   */
  onKeyPress(event) {
    // Do nothing if the enter key was not pressed.
    if (event.key !== "Enter" || event.which !== 13) {
      return;
    }

    // TODO(#6) Call this.props.onEnter with the 
    // state's value.
    
    // TODO(#7) Update the state to set this.state.value
    // to an empty string so that the user doesn't have
    // to manually backspace.
  }

  componentDidMount() {
    if (this.props.initialValue) {
      this.setState({
        ...this.state,
        value: this.props.initialValue
      });
    }
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="What do you need to do?"
        value={this.state.value}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}
