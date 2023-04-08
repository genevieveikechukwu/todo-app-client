import "../App.css";

function Register() {
  return (
    <div className="signup-form">
      <h1>HELLO! </h1>
      <div className="welcome">
        <button type="submit">Sign In</button>
      </div>
      <form action="" method="post">
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="   First Name"
          autoFocus
        />
        <input type="text" name="lname" id="lname" placeholder="   Last Name" />
        <input type="email" name="email" id="email" placeholder="  Email" />
        <input type="password" name="pwd" id="pwd" placeholder="   Password" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Register;
