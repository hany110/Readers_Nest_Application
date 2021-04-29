// const USER_API = "http://localhost:3001/api/users";
const USER_API = "https://wbdv-readers-nest-node-server.herokuapp.com/api/users";

const profile = () => {
    return fetch(`${USER_API}/profile`, {
        method: "POST",
        credentials: "include"
    }).then(response => response.json())
}


const login = (credentials) => {
    return fetch(`${USER_API}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const register = (credentials) => {
    console.log("register service",credentials)
    return fetch(`${USER_API}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const logout = () => {
    return fetch(`${USER_API}/logout`, {
        method: "POST",
        credentials: "include"
    }).then(response=>response.json())
}

const findAllMyFriends = () => {
    return fetch(USER_API)
        .then(response => response.json())
}

const findUserById = (uid) => {
    return fetch(`${USER_API}/${uid}`)
        .then(response => response.json())
}

const updateUser = (credentials) => {
    return fetch(`${USER_API}/update`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export default {
    register, login, logout, profile, findAllMyFriends, findUserById,updateUser
}