// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem

  const deleteTodoItem = () => {
    deleteTodo(id)
  }
  return (
    <li className="todos-item-con">
      <p className="todos-title">{title}</p>
      <button className="todos-btn-name" type="button" onClick={deleteTodoItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
