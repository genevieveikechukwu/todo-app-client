import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import swal from 'sweetalert';
import './App.css';


function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const addTodo = () => {
    Axios.post('http://localhost:3001/api/todo/add', {
      title: title,
      description: description,
      category: category,
      status: status
    }).then(() => {
      swal("message", "Todo has been added", "success")
    })
  }
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <div className='form'>
        <label htmlFor="title">Title</label>
        <input type="text" name="todo" id="title" onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <label htmlFor="description">Description</label>
        <input type="text" name="todo" id="description" onChange={(e) => {
          setDescription(e.target.value)
        }} />
        <label htmlFor="category">Category</label>
        <input type="text" name="todo" id="category" onChange={(e) => {
          setCategory(e.target.value)
        }} />
        <label>
          <input type="checkbox" name="subscribe" value="1"
            onChange={(e) => {
              setStatus(e.target.value)
            }} />
        </label>


        <button type='submit' onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
