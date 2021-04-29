const findResultbyId =(bookId) => {
    // console.log("google service")
    return fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyByWsH_b0gUJW7ZfijOdBbRgNRus_kTkGs`)
        .then(response => response.json())
}

const findAllBooksById =(books) => {
    console.log(books)
    return Promise.all(books.map(book=> {
            console.log("https://www.googleapis.com/books/v1/volumes/",book.bookId,"?key=AIzaSyByWsH_b0gUJW7ZfijOdBbRgNRus_kTkGs")
            return fetch(`https://www.googleapis.com/books/v1/volumes/${book.bookId}?key=AIzaSyByWsH_b0gUJW7ZfijOdBbRgNRus_kTkGs`)
        }
    ))
        .then((response)=>Promise.all(response.map(ref=>ref.json())))
    // return fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyBf0mMQXetv6_vYCkEt99mNnyjXhOIjMAo`)
    //     // return fetch("http://localhost:3001/api")
    //     .then(response => response.json())

}
const api={
    findResultbyId,
    findAllBooksById
}
export default api;
