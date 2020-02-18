import React, { Component } from 'react'

export default class TodoCompose extends Component {
  state = {
    name: null,
    age: null,
    weight: null,
    isComplete: false
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (
      this.state.name != null &&
      this.state.name != '' &&
      this.state.age != null &&
      this.state.age != '' &&
      this.state.weight != null &&
      this.state.weight != ''
    ) {
      this.props.addTodo(this.state)
    } else {
      alert('Some of the fields are left empty!')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="feed__compose">
        <label htmlFor="name" className="feed__label">
          Your Name
        </label>
        <input
          className="feed__input"
          name="name"
          id="name"
          onChange={this.handleChange}
          autoComplete="off"
        />
        <label htmlFor="age" className="feed__label">
          Your Age
        </label>
        <input
          className="feed__input"
          name="age"
          id="age"
          onChange={this.handleChange}
          autoComplete="off"
        />
        <label htmlFor="weight" className="feed__label">
          Your Weight
        </label>
        <input
          className="feed__input"
          name="weight"
          id="weight"
          onChange={this.handleChange}
          autoComplete="off"
        />
        <button className="feed__btn feed__btn--submit">Submit</button>
      </form>
    )
  }
}
