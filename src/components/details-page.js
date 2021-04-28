import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import BookDetailsService from '../services/details-search-service'
import MetaTags from 'react-meta-tags';
import StarRatings from 'react-star-ratings';

const DetailsScreen = () => {
    const {bookId} = useParams()
    const history = useHistory()
    const [book, setbook] = useState({})
    const [active, setActive] = useState(false)
    const [rating, changeTheRating]=useState(2)
    useEffect(() => {
        findResultbyId()

        // BookDetailsService.findResultbyId(bookId)
        //     .then((data) => {
        //         // console.log("I am here ",data)
        //         setbook(data)
        //     })
    }, [])

    const findResultbyId = () => {
        BookDetailsService.findResultbyId(bookId)
            .then((data) => {
                console.log("I am here ",data)
                setbook(data)
                setActive(true)
            })
    }
    const changeRating=(newRating, name) =>{
        console.log("Function called")
        changeTheRating(newRating)
    }
    return(
        <div>
            {/*<button onClick={()=>{history.goBack()}}>Back</button>*/}
            {/*/!*{bookId}*!/*/}
            {/*/!*{book.id}*!/*/}
            {/*{*/}
            {/*    active &&*/}
            {/*    <div className="container-fluid">*/}
            {/*    <h2>{book.volumeInfo.title}</h2>*/}
            {/*    <img src={book.volumeInfo.imageLinks.thumbnail} width={100}/>*/}
            {/*        <p>{book.volumeInfo.authors}</p>*/}
            {/*        {*/}
            {/*            (book.volumeInfo.averageRating !== undefined && typeof book.volumeInfo.averageRating!==undefined) &&*/}
            {/*            <p>{book.volumeInfo.averageRating}</p>*/}
            {/*        }*/}
            {/*        {*/}
            {/*            (book.volumeInfo.description !== undefined && typeof book.volumeInfo.description!==undefined) &&*/}
            {/*                <p>{book.volumeInfo.description}</p>*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*    }*/}
            <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </MetaTags>
            {
                active &&
            <div className="col col-sm-12 card" style={{width: "100rem", margin: "15px" }}>
                {/*<img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"*/}
                {/*     className="card-img-top" alt="..."/>*/}
                <div className="card-body">

                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                    <img src={book.volumeInfo.imageLinks.thumbnail} width={100}/>
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
                    <div className="tinyFont">
                    <StarRatings
                        rating={book.volumeInfo.averageRating}
                        starDimension="20px"
                        starSpacing="5px"
                        starRatedColor="blue"
                    />{book.volumeInfo.averageRating} avg rating --{book.volumeInfo.ratingsCount} ratings
                    </div>
                        <p className="card-text">{book.volumeInfo.description}</p>

                    <div className="row">
                    <select
                        // onChange={(e) =>
                        // setWidget(widget => ({...widget, size: parseInt(e.target.value)}))}
                        className="form-control yellow-color dropdown-width">
                        <option value={1}>Want to read</option>
                        <option value={2}>Currently reading</option>
                        <option value={3}>Read</option>
                    </select>

                    <Link to={`/details/${book.id}`}>
                        <button className="btn btn-primary view-on-google">
                            Check this on Google
                        </button>
                    </Link>
                    </div>
                    {/*<StarRatings*/}
                    {/*    rating={rating}*/}
                    {/*    starRatedColor="blue"*/}
                    {/*    changeRating={changeRating}*/}
                    {/*    numberOfStars={5}*/}
                    {/*    name='rating'*/}
                    {/*/>*/}
                </div>
            </div>
            }
            {
                !active &&
                    <>
                    <h1>Loading...</h1>
                    </>
            }
        </div>
    )
}

export default DetailsScreen