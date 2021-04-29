import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'
import "./register.css"

const Register = () => {
    const [credentials, setCredentials] = useState({userName: '', password: '', firstName:"",lastName:"",role:"USER"})
    const history = useHistory()
    const register = () => {
        userService.register(credentials)
            .then((user) => {
                console.log("returned promise",user)
                if(user === 0) {
                    alert("userName already taken")
                } else {
                    localStorage.setItem("userdetails",JSON.stringify(user))
                    history.push("/")
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
                        <label htmlFor="firstName">firstName</label>
                        <input
                            value={credentials.firstName}
                            onChange={(e) => {
                                setCredentials({...credentials, firstName: e.target.value})
                            }}
                            className="form-control"
                            placeholder="firstName"/>
                        <label htmlFor="lastName">lastName</label>
                        <input
                            value={credentials.lastName}
                            onChange={(e) => {
                                setCredentials({...credentials, lastName: e.target.value})
                            }}
                            className="form-control"
                            placeholder="lastName"/>
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
                        <label htmlFor="password">Confirm Password</label>
                        <input className="form-control" placeholder="validate password"
                               type="password"/>
                    </form>

                    <button
                        onClick={register}
                        className="btn btn-primary btn-md btn-block button-register">
                        Register
                    </button>

                    <Link to="/users/login" style = {{float:"right"}}>
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