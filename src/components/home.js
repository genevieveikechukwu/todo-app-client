import React, { useState, useEffect } from "react";
import Axios from "axios";
import swal from "sweetalert";
import "../App.css";

function Home() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        Axios.get("https://todo-server-b5mu.onrender.com/api/todo/").then(
            (response) => {
                setTodoList(response.data);
            }
        );
    }, []);
    const addTodo = () => {
        Axios.post("https://todo-server-b5mu.onrender.com/api/todo/add", {
            title: title,
            description: description,
            category: category,
            status: status,
        }).then(() => {
            swal("message", "Todo has been added", "success");
        });
    };
    return (
        <div className="Home">
            <h1>TODO APP</h1>
                <input
                    type="text"
                    name="todo"
                    id="title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <input
                    type="text"
                    name="todo"
                    id="description"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <input
                    type="text"
                    name="todo"
                    id="category"
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                />
                    <input
                        type="checkbox"
                        name="subscribe"
                        value="1"
                        onChange={(e) => {
                            setStatus(e.target.value);
                        }}
                    />

                <button type="submit" onClick={addTodo}>
                    Add
                </button>
                {todoList.map((val) => {
                    return (
                        <div className="list-items">
                            <p className="items">title: {val.title}</p>
                        </div>
                    );
                })}
            </div>
    );
}

export default Home;
