import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  props = {
    onClick: onClick
    style: { textDecoration: completed ? 'line-through' : 'none' }
  }

  <li {...props}>{text}</li>
)

Todo.propTypes = {
  onClick:    PropTypes.func.isRequired,
  completed:  PropTypes.bool.isRequired,
  text:       PropTypes.string.isRequired
}

export default Todo
