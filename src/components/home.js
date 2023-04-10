import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../App.css";
import Item from "./list";
function Home() {
  const [text, setText] = useState("");


  const [todos, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");


  const fetch = () => {
    Axios.get("https://todo-server-b5mu.onrender.com/api/todo")
      .then((res) => {
        setTodo(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
        return err
      });
  }

  useEffect(() => { 
fetch()
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };


  const deleteTodo = (id) => { 
    Axios.delete(`https://todo-server-b5mu.onrender.com/api/todo/${id}`).then((res) => {
      // console.log(res)
      
      fetch()
      return res
    })
      .catch((err) => {
        // console.log(err)
        return err
      })
    // console.log(id)
  };


  const add = () => {
     
    Axios.post("https://todo-server-b5mu.onrender.com/api/todo/add", {
        text: text,
        status: ""
      }).then((res) => {
        setText("");
        // console.log(res.data);
        fetch()
      })
        .catch((err) => {
          // console.log(err)
          return err
        })
  }

  const update = (id) => {

    Axios.put(`https://todo-server-b5mu.onrender.com/api/todo/${id}`, {   
         text,
      }).then((res) => {
        setText("");
        setUpdating("")
        // console.log(res.data);
        fetch()
      })
        .catch((err) => {
          // console.log(err)
          return err
        })
      
    }
  ;
  const addUpdate = () => {
    if (isUpdating === "") {
      add()
    } else if (isUpdating !== "") {
      update(isUpdating)
    }

       
  }

  const updateTodo = (id, text) => {
   
    setUpdating(id)

    setText(text)
    // console.log(id)
   

   };

  // --------------------------------------------------------------------------------

  
  return (
    <div className="Home">
      <h1>TODO APP</h1>
      <input
        type="text"
        name="todo"
        id="title"
        placeholder="Add a todo item......"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      {todos.map(todo => <Item
        key={todo.id}
        text={todo.text}
        remove={() => deleteTodo(todo.id)}
        update={() => updateTodo(todo.id, todo.text)}
      />)}

      <button className="add-btn" id="reload" type="submit" onClick={addUpdate}>
        {isUpdating ? "Update": "Add"}
      </button>
      <Link to="/signup">
        <button className="signout" onClick={handleLogout}>
          Signout
        </button>
      </Link>
    </div>
  );
}

export default Home;
