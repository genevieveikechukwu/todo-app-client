import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://todo-server-b5mu.onrender.com/api/todo/signin";
            const { data: res } = await Axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
            console.log(error);
        }
    };

    return (
        <div className="signup-form">
            <h1>
                HELLO! <br /> <br /> Login to your Account{" "}
            </h1>
            <div className="welcome">
                <Link to="/signup">
                    <button type="submit">Sign Up</button>
                </Link>
            </div>
            <form action="" method="post" id="form">
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    required
                    onChange={handleChange}
                    id="email"
                    placeholder="   Email"
                    className="signin"
                    autoFocus
                />
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    required
                    onChange={handleChange}
                    id="pwd"
                    placeholder="    Password"
                    className="signin"
                />

                <button type="submit" onClick={handleSubmit} className="signin-btn">
                    Sign In
                </button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}
export default Login;
