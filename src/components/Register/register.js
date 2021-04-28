import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import "./register.css"

const Register = () => {
    const [credentials, setCredentials] = useState({userName: '', password: ''})
    const history = useHistory()
    const register = () => {
        userService.register(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    alert("userName already taken")
                } else {
                    history.push("/profile")
                }
            })
    }
    return(
        <div class="container-fluid register-body">
            <div class="login-register">
                <div class="nav-buttons nav-buttons-register">
                    <button id="registerBtn" class='active button-register' >Register </button>
                </div>
                <div class="form-group form-group-register">
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
                            type="password"
                            placeholder="password"/>
                        <input className="form-control" placeholder="validate password"
                               type="password"/>
                    </form>
                    <button
                        onClick={register}
                        className="btn btn-primary btn-md btn-block button-register">
                        Register
                    </button>
                    <Link to="/login" style = {{float:"right"}}>
                        Login
                    </Link>

                </div>
            </div>
        </div>
    )
}

//                            <input type="submit" value="Submit" class="submit"/>
//<div>
//            <h1>Register</h1>
//            <input
//                value={credentials.userName}
//                onChange={(e) => {setCredentials({...credentials, userName: e.target.value})}}
//                className="form-control"
//                placeholder="userName"/>
//            <input
//                value={credentials.password}
//                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
//                className="form-control"
//                placeholder="password"/>
//            <input
//                className="form-control"
//                placeholder="validate password"/>
//            <button onClick={register} className="btn btn-primary">
//                Register
//            </button>
//            <Link to="/login">
//                Login
//            </Link>
//        </div>
//
//
//
export default Register;