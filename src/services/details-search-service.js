const findResultbyId =(bookId) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyCAWkmo45hFa_5vUogSWC6E6LKmjUakB54`)
        .then(response => response.json())

}

const api={
    findResultbyId
}
export default api;
