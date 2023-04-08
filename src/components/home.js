import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../App.css";
import Item from "./list";
function Home() {
  const [text, setText] = useState("");


  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  useEffect(() => {
    Axios.get("https://todo-server-b5mu.onrender.com/api/todo")
      .then((res) => {
        setTodo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const deleteTodo = (id) => { 
    Axios.delete(`https://todo-server-b5mu.onrender.com/api/todo/:id`, { id
    }).then((res) => {
      console.log(res.data.id);
    })
      .catch((err) => {
        console.log(err)
      })
  };


  const addUpdate = () => {
    if (isUpdating === "") {
      Axios.post("https://todo-server-b5mu.onrender.com/api/todo/add", {
        text: text,
        status:""
      }).then((res) => {
        setText("");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
    } else {
      Axios.put(`https://todo-server-b5mu.onrender.com/api/todo/:id`, {
        text,
        isUpdating,
      }).then((res) => {
        setText("");
        setUpdating("")
        console.log(res.data);
      })
        .catch((err) => {
          console.log(err)
        })
    }
  };

  const updateTodo = (id, text) => {
    
    setUpdating(id)
    setText(text)
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

      {todo.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          remove={() => deleteTodo(item.id)}
          update={() => {
            updateTodo(item.id, item.text);
          }}
        />
      ))}

      <button className="add-btn" type="submit" onClick={addUpdate}>
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
