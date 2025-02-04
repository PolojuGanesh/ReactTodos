import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening', completed: false},
  {id: 2, title: 'Rent the movie for tomorrow movie night', completed: false},
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {id: 4, title: 'Drop the parcel at Bloomingdale', completed: false},
  {id: 5, title: 'Order fruits on Big Basket', completed: false},
  {id: 6, title: 'Fix the production issue', completed: false},
  {id: 7, title: 'Confirm my slot for Saturday Night', completed: false},
  {id: 8, title: 'Get essentials for Sunday car wash', completed: false},
]

class SimpleTodos extends Component {
  state = {todoItemFullList: initialTodosList, inputText: ''}

  onDeleteTodoItem = id => {
    this.setState(prevState => ({
      todoItemFullList: prevState.todoItemFullList.filter(
        item => item.id !== id,
      ),
    }))
  }

  onToggleComplete = id => {
    this.setState(prevState => ({
      todoItemFullList: prevState.todoItemFullList.map(item =>
        item.id === id ? {...item, completed: !item.completed} : item,
      ),
    }))
  }

  onAddTodo = () => {
    const {inputText, todoItemFullList} = this.state
    if (inputText.trim() === '') return

    const inputParts = inputText.trim().split(' ')
    const lastPart = inputParts[inputParts.length - 1]
    let count = 1
    let title = inputText

    if (!Number.isNaN(Number(lastPart))) {
      count = parseInt(lastPart, 10)
      title = inputParts.slice(0, -1).join(' ')
    }

    const newTodos = Array.from({length: count}, (_, index) => ({
      id: todoItemFullList.length + index + 1,
      title,
      completed: false,
    }))

    this.setState({
      todoItemFullList: [...todoItemFullList, ...newTodos],
      inputText: '',
    })
  }

  handleInputChange = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {todoItemFullList, inputText} = this.state
    return (
      <div className="main-container">
        <div className="input-and-add-button">
          <input
            placeholder="Enter Text Here..."
            type="text"
            className="input-text"
            value={inputText}
            onChange={this.handleInputChange}
          />
          <button className="add-button" type="button" onClick={this.onAddTodo}>
            Add
          </button>
        </div>
        <div className="sub-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="titles">
            {todoItemFullList.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                itemDetails={eachItem}
                onDeleteTodoItem={this.onDeleteTodoItem}
                onToggleComplete={this.onToggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
