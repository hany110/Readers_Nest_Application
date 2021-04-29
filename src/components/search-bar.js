import React, {useState,useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import searchService from "../services/search-service";
import { Col, Row, Container } from './Grid';
import Jumbotron from './Jumbotron';
import ViewBtn from './ViewBtn';
import SaveBtn from './SaveBtn';
import { List, ListItem } from "./List";
import userService from "../services/user-service";
import bookShelfService, {findSavedBooks} from '../services/bookshelf-service';
import api from "../services/details-search-service";

const SearchBar = (
    {}) => {
    const [searchTerm, setSearchTerm] = useState("palace")
    const [results, saveResult] = useState(null)
    const [active, setActive] = useState(false)
    const [book,setBook]= useState(null)
    // const {bookId}=useParams();
    // console.log("Check this",bookId);
    const user=JSON.parse(localStorage.getItem("userdetails"))
    useEffect(() => {

    }, [])
    // console.log(user);
    const saveBook = (bookid) => {
        console.log("inside save book", bookid)
        bookShelfService.saveBooks(user._id,bookid)
            .then((book) => {
                /*console.log(userId);*/
                // console.log(bookId);
                // console.log(user._id);

               /* console.log(user)*/
                    console.log("dekh",book)
                    setBook(book)
                alert(book.bookId," has been saved successfully");

                })
            }

    const findResultForKeyword=(searched) =>{
        // console.log("called")
        searchService.findResult(searched)
            .then((results) => {
                // console.log("test",results)
                saveResult(results);
            setActive(true);}
            )

        // console.log(results)
    }
    return(
        // <div className="container list-group-item">
        //     <div className="row">
        //         <div className="col-sm-10">
        //     <input onChange={(e) => setSearchTerm(e.target.value)}
        //            placeholder="Search for books" className="form-control" />
        //         </div>
        //         <div className="col-sm-2">
        //     <Link
        //         className="btn btn-primary float-right"
        //         onClick={() =>
        //             findResultForKeyword(searchTerm)
        //         }>
        //         Search
        //     </Link>
        //         </div>
        //     </div>
        //     {/*{console.log(results)}*/}
        //     {
        //     active &&
        //     <>{
        //         results.items.map(result =>
        //             <li>
        //                 <Link to={`/details/${result.id}`}>
        //                     {result.volumeInfo.title}
        //                 </Link>
        //             </li>
        //         )
        //     }
        //     </>
        //     }
        //     {/*{searchTerm}*/}
        // </div>
            <Container fluid>
            <Row>
                <Jumbotron>
                    <h1>Reader's Nest Book Search</h1>
                </Jumbotron>
            </Row>
            <Row>
                <Container>
                    <h2 className="white-color">Book Search</h2>
                    <div className="row mt-2">
                        <div className="col-sm-11 spacing-class">
                    <input onChange={(e) => setSearchTerm(e.target.value)}
                                   placeholder="Search for books" className="form-control" />
                        </div>
                        <div className="col-sm-1">
                    <Link
                            className="btn btn-primary custom-btn float-right"
                            onClick={() =>
                                findResultForKeyword(searchTerm)
                            }>
                            Search
                        </Link>
                        </div>
                    </div>
                </Container>
            </Row>
            {
                active &&
                <>{
                    <Row>
                        <Container>
                                {
                                (results.items !== undefined) &&
                                <List>
                                    {results.items.map(book => (
                                        <ListItem key={book.id}>
                                            <Row>
                                                <Col size='8'>
                                                    <strong>
                                                        {book.volumeInfo.title}
                                                    </strong>
                                                </Col>
                                                <Col size='4'>
                                                    {/*<Link to={`/books/${book.id}`}>*/}
                                                        <button style={{marginLeft: "10px"}} className="float-right btn btn-warning" onClick={() =>
                                                            saveBook(book.id)}>Save</button>
                                                    {/*<SaveBtn onClick={saveBook}></SaveBtn>*/}
                                                    {/*</Link>*/}
                                                    <Link to={`/details/${book.id}`}>
                                                    <ViewBtn/>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            {
                                            book.volumeInfo.imageLinks!==undefined &&
                                            <img src={book.volumeInfo.imageLinks.thumbnail} width={100}/>
                                            }
                                            {
                                                book.volumeInfo.imageLinks===undefined &&
                                                    <img src="https://www.pikpng.com/pngl/m/144-1448854_broken-png-broken-email-icon-clipart.png" width={75} height={100}></img>
                                            }
                                            <p>Written by {
                                                book.volumeInfo.authors !== undefined &&
                                                <>
                                                    {book.volumeInfo.authors[0]}
                                                </>
                                            }
                                                {book.volumeInfo.authors === undefined &&
                                                <>
                                                    "Not provided by Google Books API"
                                                </>
                                                }
                                            </p>
                                            {/*<p className='text-justify'>{book.volumeInfo.description}</p>*/}
                                        </ListItem>
                                    ))}
                                </List>
                            }
                            {
                                (results.items === undefined || typeof results.items === undefined) &&
                                <h3>No Results to Display</h3>
                            }

                        </Container>
                    </Row>
                }
                </>
            }
        </Container>
    )
}
export default SearchBar