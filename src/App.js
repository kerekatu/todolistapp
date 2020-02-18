import React, { Component } from 'react'

import TodoFeed from './components/TodoFeed'

export default class TodolistApp extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="heading-1">TodoList App</h1>
        </header>
        <TodoFeed />
      </div>
    )
  }
}
