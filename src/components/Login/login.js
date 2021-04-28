import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import "./login.css"

const Login = () => {
    const [credentials, setCredentials] = useState({userName: '', password: ''})
    const history = useHistory()
    const login = () => {
        userService.login(credentials)
            .then((user) => {
                console.log(user)
                console.log(credentials)
                if(user === 0) {
                    alert("login failed, try again")
                    console.log(credentials)
                } else {
                    history.push("/profile")
                }
            })
    }

    return(
        <div class="container-fluid login-body">
            <div class="login-register">
                <div class="nav-buttons nav-buttons-login">
                    <button id="loginBtn" class='active button-login' >Login </button>
                </div>
                <div class="form-group form-group-login">
                    <form action="" id="loginform">
                        <label for="userName">userName</label>
                        <input
                            value={credentials.userName}
                            onChange={(e) => {setCredentials({...credentials, userName: e.target.value})}}
                            className="form-control"
                            placeholder="userName"/>
                        <label for="password">password</label>
                        <input
                            value={credentials.password}
                            onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                            className="form-control"
                            placeholder="password"/>
                    </form>


                    <button
                        onClick={login}
                        className="btn btn-primary btn-md btn-block button-login">
                        Login
                    </button>
                    <Link to="/register" style = {{float:"right"}}>
                        Register
                    </Link>

                </div>
            </div>
        </div>

    )
}


//<input type="submit" value="Register" class="submit"/>
//                            </form>
//                            <form action="" id="registerform">

//            <h1>Login</h1>
//            <input
//                value={credentials.userName}
//                onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
//                className="form-control"
//                placeholder="username"/>
//            <input
//                value={credentials.password}
//                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
//                className="form-control"
//                placeholder="password"/>
//            <button
//                onClick={login}
//                className="btn btn-primary">
//                Login
//            </button>
//            <Link to="/register">
//                Register
//            </Link>
//        </div>

//<div class="container">
//        <div class="login-register">
//            <div class="nav-buttons">
//                <button id="loginBtn" class='active' >Login </button>
//                <button id="registerBtn">Register</button>
//            </div>
//            <div class="form-group">
//                <form action="" id="loginform">
//                    <label for="username">username</label>
//                    <input type="text" id="username">
//                    <label for="password">password</label>
//                    <input type="text" id="password">
//                    <input type="submit" value="Submit" class="submit">
//                </form>
//                <form action="" id="registerform">
//                    <label for="fullname">fullname</label>
//                    <input type="text" id="fullname">
//                    <label for="email">email</label>
//                    <input type="text" id="email">
//                    <label for="passwword">password</label>
//                    <input type="text" id="password">
//                    <label for="confirmpassword">confirm password</label>
//                    <input type="text" id="confirmpassword">
//                    <input type="submit" value="Submit" class="submit">
//                </form>
//            </div>
//            <div id="forgot">
//                <a href="">forgot password?</a>
//            </div>
//        </div>
//
//    </div>

export default Login;