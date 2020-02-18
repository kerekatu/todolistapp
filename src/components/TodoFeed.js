import React, { Component } from 'react'

import TodoItems from './TodoItems'
import TodoCompose from './TodoCompose'

export default class TodoFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { name: 'Konrad', age: 20, weight: 68, isComplete: false, id: 1 },
        { name: 'Angel', age: 9999, weight: 1, isComplete: false, id: 2 }
      ]
    }
    this.completeTodo = this.completeTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  addTodo = todo => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  deleteTodo = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  completeTodo = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    return (
      <main className="feed">
        <TodoItems
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
        <TodoCompose addTodo={this.addTodo} />
      </main>
    )
  }
}
