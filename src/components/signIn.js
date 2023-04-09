import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Axios  from "axios";

function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("")


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3001/api/todo/signin";
            const { data: res } = await Axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"
        } catch (error) {
            if (error.res && error.res.status
                >= 400 && error.res.status <= 500) {
                setError(error.response.data.message)
            }
            console.log(error)

        }
    }


    return (
        <div className="signup-form">
            <h1>HELLO! Login to your account </h1>
            <div className="welcome">
                <Link to = "/signup"><button type="submit">Sign Up</button></Link> 
            </div>
            <form action="" method="post">
                <input type="email" name="email"
                    value={data.email}
                    required
                    onChange={handleChange}    id="email" placeholder="   Email" className="signin" autoFocus />
                <input type="password" name="password"
                    value={data.password}
                    required
                    onChange={handleChange}    id="pwd" placeholder="    Password" className="signin" />
                {error && <div>{error}</div>}
                <button type="submit" onClick={handleSubmit} className="signin-btn" >Sign In</button>
            </form>
        </div>
    )
}
export default Login;