import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import ChildView from './Components/ChildView'



class App extends Component {
  state = {
    todoList: [
      {
        id: uuidv4(),
        todo: 'Redo React'
      },
      {
        id: uuidv4(),
        todo: 'write letter'
      },
      {
        id: uuidv4(),
        todo: 'Fix recipes'
      }
    ],
    inputValue: '',
    showErrorMessage: false,
    showNoTodoMessage: false

  }

  inputChange = (event) => {
    // let check = typeof event.target.name 
    if (this.state.showErrorMessage) {
      this.setState({
        showErrorMessage: false
      })
    }

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.inputValue.length === 0) {
      this.setState({
        showErrorMessage: true
      })
      return;
    }

    let newTodo = {
      id: uuidv4(),
      todo: this.state.inputValue
    }

    let newArrayTodo = [...this.state.todoList, newTodo]

    this.setState(
      {
        todoList: newArrayTodo,
        inputValue: ''
      },
      () => {
        if (this.state.showNoTodoMessage) {
          this.setState({
            showNoTodoMessage: false
          })
        }
      }
    )

  }

  handleDelete = (deleteId) => {
    let copyArray = [...this.state.todoList]
    let newArrayWithoutDeleteId = copyArray.filter(({ id }) => id !== deleteId)
    this.setState({
      todoList: newArrayWithoutDeleteId
    },
      () => {
        if (this.state.todoList.length === 0) {
          this.setState({
            showNoTodoMessage: true
          })
        }
      }
    )
  }

  showTodoList = () => {
    return this.state.todoList.map(({ todo, id }) =>
      <li key={id} style={{ marginTop: 20, listStyle: "none" }}>
        {todo}
        <button onClick={() => this.handleDelete(id)} style={{ backgroundColor: "red", color: "white", margin: 5 }}>delete</button>
      </li>
    )
  }
addFunc =() =>{
  console.log('this text from addFunc function')
}
  render() {
    return (

      <div style={{ textAlign: "center", marginTop: 20 }}>

        {this.state.showErrorMessage
          ? <p style={{ color: "red" }}>Please insert input</p>
          : null
        }
        <input
          onChange={this.inputChange}
          type='text'
          name="inputValue"
          value={this.state.inputValue}
        ></input>

        <button onClick={this.handleSubmit}>Add</button>

        {this.state.showNoTodoMessage
          ? <p style={{ color: 'blue' }}>There's no todo</p>
          : <div> {this.showTodoList()}</div>
        }
<div>
        <ChildView 
        name='123'
        // age={30}
        array={[1,3,4]}
        todoList={this.state.todoList}
        trueOrFalse={true}
        addFunc={this.addFunc}
        obj = {{a: 1, b: 2, c: 3}}
        />

</div>
      </div>

    )
  }
}





export default App