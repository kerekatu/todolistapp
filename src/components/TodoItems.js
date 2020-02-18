import React from 'react'

const TodoItems = ({ todos, deleteTodo, completeTodo }) => {
  const todoList = todos.map(todo => {
    return (
      <div
        className={
          todo.isComplete ? 'feed__item feed__item--completed' : 'feed__item'
        }
        key={todo.id}
      >
        <p className="feed__text">
          <div className="highlight">Name:</div> {todo.name}
        </p>
        <p className="feed__text">
          <div className="highlight">Age:</div> {todo.age}
        </p>
        <p className="feed__text">
          <div className="highlight">Weight:</div> {todo.weight}
        </p>
        <div className="feed__box">
          <label htmlFor="complete" className="highlight">
            Mark as Completed:
          </label>
          <input
            className="feed__input--checkbox"
            type="checkbox"
            name="complete"
            id="complete"
            checked={todo.isComplete}
            onChange={() => completeTodo(todo.id)}
          />
        </div>
        <button
          className="feed__btn feed__btn--delete"
          onClick={() => {
            deleteTodo(todo.id)
          }}
        >
          Delete Entry
        </button>
      </div>
    )
  })

  return <div className="feed__list">{todoList}</div>
}

export default TodoItems
