import React, {useState} from 'react'
import './profile.css'
import userService from '../../services/user-service'
import Nav from '../Nav/index';


const Profile=()=>{
    const [user,setUser]=useState(localStorage.getItem("userdetails")?JSON.parse(localStorage.getItem("userdetails")):null)
    const updateUser = () => {
        userService.updateUser(user)
            .then((updated_user) => {
                console.log(updated_user)
                // if(user === 0) {
                //     alert("userName already taken")
                // } else {
                //     history.push("/profile")
                // }
                setUser(updated_user)
                localStorage.setItem("userdetails",JSON.stringify(updated_user))
                alert("Updated succesfully")
            })
    }
    const cancelOperaton=()=>{
        setUser(JSON.parse(localStorage.getItem("userdetails")))
    }
    return (
        <>
            <Nav/>
        <div className="container">
            <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="account-settings">
                                <div className="user-profile">
                                    <div className="user-avatar">
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Maxwell Admin"/>
                                    </div>
                                    <h5 className="user-name">{user.userName}</h5>
                                    <h6 className="user-name">Role: {user.role.toUpperCase()}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mb-2 text-primary">Personal Details</h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="firstName">First Name</label>
                                        <input type="text" className="form-control profile-form-control" id="firstName"
                                               onChange={(e) => setUser(user => ({...user, firstName: e.target.value}))}
                                               value={user.firstName}
                                               // placeholder="Enter first name"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" className="form-control profile-form-control" id="lastName"
                                               onChange={(e) => setUser(user => ({...user, lastName: e.target.value}))}
                                               value={user.lastName}
                                               // placeholder="Enter last name"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control profile-form-control" id="username"
                                               onChange={(e) => setUser(user => ({...user, userName: e.target.value}))}
                                               value={user.userName}
                                               // placeholder="Enter username"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control profile-form-control" id="password" placeholder="*******"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-right">
                                        <button type="button" id="submit" name="submit" className="btn btn-success"
                                        onClick={updateUser}
                                        >Update
                                        </button>
                                        {' '}
                                        <button type="button" id="submit" name="submit"
                                                onClick={cancelOperaton}
                                                className="btn btn-danger">Cancel
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Profile;