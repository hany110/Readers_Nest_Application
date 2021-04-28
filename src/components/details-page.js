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
    const [rating, addRating]=useState(false)
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
                    <p className="card-text">{book.volumeInfo.description}</p>

                    {/*<Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">*/}
                    {/*    {course.title}*/}
                    {/*</Link>*/}
                    {/*<br/>*/}
                    {/*<Link to={`/courses/${course._id}/quizzes`}>*/}
                    {/*    Quizzes*/}
                    {/*</Link>*/}

                    {/*{*/}
                    {/*    !editing &&*/}
                    {/*    <div>*/}
                    {/*        <i onClick={() => setEditing(true)} className="fas fa-edit blue-color float-right"></i>*/}
                    {/*        /!*<i onClick={() => deleteCourse(course)} className="fas fa-trash red-color float-right"></i>*!/*/}
                    {/*    </div>*/}
                    {/*}*/}
                    {/*<SaveBtn/>*/}
                    <button className="btn btn-warning add-to-list">
                        Save
                    </button>
                    <Link to={`/details/${book.id}`}>
                        <button className="btn btn-primary view-on-google">
                            Check this on Google
                        </button>
                    </Link>
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