// const USER_BOOKS_URL = 'http://localhost:3001/api/userbooks';
const USER_BOOKS_URL = 'https://wbdv-readers-nest-node-server.herokuapp.com/api/userbooks';

export const findSavedBooks = (uid) => {
    return fetch(`${USER_BOOKS_URL}/${uid}`)
        .then(response => response.json())
}

export const saveBooks=(uid,bid)=>{
    console.log("service",uid,bid)
    return fetch(`${USER_BOOKS_URL}/create/${uid}/${bid}`, {
        method: "POST",
        // body: JSON.stringify(uid,bid),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteBook = (uid,bid) =>
    fetch(`${USER_BOOKS_URL}/delete/${uid}/${bid}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export default {findSavedBooks,saveBooks,deleteBook};