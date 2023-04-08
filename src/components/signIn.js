import "../App.css";

function Login() {
    return (
        <div className="signup-form">
            <h1>HELLO! </h1>
            <div className="welcome">
                <button type="submit">Sign Up</button>
            </div>
            <form action="" method="post">
                <input type="email" name="email" id="email" placeholder="   Email" className="signin" autoFocus/>
                <input type="password" name="pwd" id="pwd" placeholder="    Password" className="signin" />

                <button type="submit" className="signin-btn" >Sign In</button>
            </form>
        </div>
    )
}
export default Login;