import React,{useState,useEffect} from "react";
import usersService from "../../services/user-service";
function Nav() {
const [isloggedIn, checkLogIn]=useState(localStorage.getItem("userdetails")!==null)
    useEffect(() => {
        checkLogIn(localStorage.getItem("userdetails")!==null)
            }
    , [])
    const logOut=()=>{
        usersService.logout()
            .then((msg)=>{console.log(msg)
            localStorage.clear()
                window.location.reload()
            })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-bg-color">
            <a className="navbar-brand" href="/">Reader's Nest</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Search</a>
                    </li>
                    {
                        isloggedIn &&
                        <li className="nav-item">
                            <a className="nav-link" href={`/bookshelf/${JSON.parse(localStorage.getItem("userdetails"))._id}`}>Saved</a>
                        </li>
                    }
                    {/*<li className="nav-item float-right">*/}
                    {/*    <a className="nav-link" href="/login">Login</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item float-right">*/}
                    {/*    <a className="nav-link" href="/register">Register</a>*/}
                    {/*</li>*/}
                </ul>
                <ul className="navbar-nav">
                    {
                        !isloggedIn &&
                            <>
                        <li className="nav-item">
                            <a className="nav-link" href="/users/login">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/users/register">Register</a>
                        </li>
                            </>
                    }
                    {
                        isloggedIn &&
                            <>
                        <li className="nav-item">
                            <a className="nav-link" href="/user/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" onClick={()=>logOut()}>Logout</a>
                        </li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
