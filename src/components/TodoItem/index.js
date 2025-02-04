// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, onDeleteTodoItem} = props
  const {title, id} = itemDetails
  const onDelete = () => {
    onDeleteTodoItem(id)
  }
  return (
    <li className="list">
      <p className="heading-title">{title}</p>
      <button onClick={onDelete} className="button" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
