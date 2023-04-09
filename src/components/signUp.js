import "../App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";



function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });



  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://todo-server-b5mu.onrender.com/api/todo/signup";
      const { data: res } = await Axios.post(url, data);
      navigate("/signin")
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status
        >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
      console.log(error)

    }
  }

  return (
    <div className="signup-form">
      <h1>HELLO! <br /> <br /> Create Account  </h1>
      <div className="welcome">
        <Link to="/signin"> <button type="submit">Sign In</button></Link>
      </div>


      <form action="" method="post">
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          id="fname"
          required
          placeholder="   First Name"
          autoFocus
        />


        <input type="text" id="lname"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          required
          placeholder="  
         Last Name" />


        <input type="email" name="email" id="email"
          value={data.email}
          required
          onChange={handleChange}
          placeholder="  Email" />


        <input type="password" name="password"
          required
          value={data.password}
          onChange={handleChange}
          id="pwd" placeholder="   Password" />




        <button type="submit" onClick={handleSubmit}>Sign Up</button>

        {error && <div className="signin-error">{error}</div>}
      </form>
    </div>
  );
}
export default Register;
