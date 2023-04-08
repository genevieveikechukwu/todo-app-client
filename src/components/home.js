import React, { useState, useEffect } from "react";
import Axios from "axios";
import swal from "sweetalert";
import "../App.css";
import Item from "./list";
function Home() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdate] = useState("")

  useEffect(() => {
    Axios.get("https://todo-server-b5mu.onrender.com/api/todo/").then(
      (response) => {
        setTodo(response.data);
        console.log(response.data)
      }
    );
  }, []);
  const addTodo = () => {
    Axios.post("https://todo-server-b5mu.onrender.com/api/todo/add", {
      title: text,
      status: status,
    }).then(() => {
      swal("message", "Todo has been added", "success");
    })
        .catch(() => {
            "Could not update item"
        });
  };
  const deleteTodo = (_id) => {
  
  }
  const updateTodo = (_id, text) => {
  
  }

  const addUpdate = () => {
    if (isUpdating === "") {
      Axios.post("https://todo-server-b5mu.onrender.com/api/todo/add", {text}).then(
        (response) => {
          setTodo(response.data);
          console.log(response.data)
        })
    }
  }
  return (
    <div className="Home">
      <h1>TODO APP</h1>
      <input
        type="text"
        name="todo"
        id="title"
              placeholder="   Add a todo item......"
              value = {text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    
        {todo.map(item => <Item key = {item._id}
        text={item.text}
        remove={() => deleteTodo(item._id)}
        update={() => {
          updateTodo(item._id, item.text)
        }}/>
        )}

      <input
        className="check-box"
        type="checkbox"
        name="subscribe"
        value="1"
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      />
      <button className="add-btn" type="submit" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default Home;
