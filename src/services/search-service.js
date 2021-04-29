const SEARCH_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const findResult =(searched) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searched}&key=AIzaSyByWsH_b0gUJW7ZfijOdBbRgNRus_kTkGs`)
            .then(response => response.json())

}


const api={
    findResult
}
export default api;