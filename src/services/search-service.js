const SEARCH_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const findResult =(searched) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searched}&key=AIzaSyCAWkmo45hFa_5vUogSWC6E6LKmjUakB54`)
            .then(response => response.json())

}


const api={
    findResult
}
export default api;