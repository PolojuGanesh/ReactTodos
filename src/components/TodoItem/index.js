import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    isEditing: false,
    updatedTitle: '', // Initialize with an empty string
  }

  componentDidMount() {
    const {itemDetails} = this.props
    this.setState({updatedTitle: itemDetails.title}) // Set title after mounting
  }

  onDelete = () => {
    const {itemDetails, onDeleteTodoItem} = this.props
    onDeleteTodoItem(itemDetails.id)
  }

  onToggleComplete = () => {
    const {itemDetails, onToggleComplete} = this.props
    onToggleComplete(itemDetails.id)
  }

  onEdit = () => {
    this.setState({isEditing: true})
  }

  onSave = () => {
    this.setState({isEditing: false})
  }

  handleChange = event => {
    this.setState({updatedTitle: event.target.value})
  }

  render() {
    const {itemDetails} = this.props
    const {isEditing, updatedTitle} = this.state

    return (
      <li className="list">
        <input
          type="checkbox"
          checked={itemDetails.completed}
          onChange={this.onToggleComplete}
        />
        {isEditing ? (
          <input
            type="text"
            value={updatedTitle}
            onChange={this.handleChange}
            className="edit-input"
          />
        ) : (
          <p
            className={`heading-title ${
              itemDetails.completed ? 'completed' : ''
            }`}
          >
            {itemDetails.title}
          </p>
        )}
        <button
          onClick={isEditing ? this.onSave : this.onEdit}
          className="button"
          type="button"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={this.onDelete}
          className="button delete-button"
          type="button"
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
