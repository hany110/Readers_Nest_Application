import React,{useState,useEffect} from 'react';
import { Col, Row, Container } from '../Grid/index';
import { List, ListItem } from "../List/index";
import {Link, useParams} from "react-router-dom";
import ViewBtn from "../ViewBtn";
import bookShelfService, {findSavedBooks} from "../../services/bookshelf-service";
import api from "../../services/details-search-service"
import Nav from '../Nav/index';


const BookShelf = () => {
    const [savedBooks, setSavedBooks] = useState([])
    const [currentBook,setCurrentBook]=useState()
    const {userId}=useParams();
    const user=JSON.parse(localStorage.getItem("userdetails"))
    useEffect(() => {
        console.log(userId)
        findSavedBooks(user._id)
            .then((savedBooks) => {
                api.findAllBooksById(savedBooks)
                    .then((data)=>{
                    console.log("dekh",data)
                        setSavedBooks(data)
                })
                // console.log(books)
                // setSavedBooks(savedBooks)
                console.log("saved books",savedBooks)
            })
    }, [savedBooks])

    const deleteBook = (bookId) => {
        console.log("inside delete book", bookId)
        bookShelfService.deleteBook(user._id,bookId)
            .then((book) => {

                console.log("dekh book hogyi delete");
                setSavedBooks(book);
                alert("Book has been saved successfully");

            })
    }


    return(
<>
    <Nav/>
        <Row>
            <Container>
                {
                 <> <h2>My Bookshelf</h2>
                    <List>
                        {
                            // console.log("check",savedBooks)
                            savedBooks.map((book) => {
                            return(
                            //     <div className="row list-group-item">
                            //         {book.volumeInfo.title}
                            // </div>
                                <ListItem key={book.id}>
                                    <Row>
                                        <Col size='8'>
                                            <strong>
                                                {book.volumeInfo.title}
                                            </strong>
                                        </Col>
                                        <Col size='4'>
                                            <button style={{marginLeft: "10px"}}
                                                    className="float-right btn btn-danger"
                                                    onClick={() =>
                                                  deleteBook(book.id)}>Delete</button>
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
                            )
                        })
                        }

                    </List>
                 </>
                }
                {
                    (savedBooks === undefined || typeof savedBooks === undefined) &&
                    <h3>No Results to Display</h3>
                }

            </Container>
        </Row>
</>
    );
}

export default BookShelf;