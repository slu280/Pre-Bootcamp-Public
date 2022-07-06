import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating  from 'react-rating-scale';
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate"
import "./Create.css"
 

const Create = ()=> {
    const [movies, setMovies] = useState([]);
    const [favorite, setFavorite] = useState([])
    const [rating, setRating] = useState([])
    let history = useHistory()
    const [pageNumber, setPageNumber] = useState(0)
    const moviePerPage = 3
    const pagesVisited = pageNumber * moviePerPage
    //const [button, setButton] = useState("Add To My Movie List")
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cdff4b50a037c5e018d0ad3e61ff1a47")
        .then(res => setMovies(res.data.results))
        .catch(err => console.log("error: ", err))
    }, [])
    console.log(movies.slice(1, 5))
    const displayMovies = movies
    .slice(pagesVisited, pagesVisited + moviePerPage)
    .map((movie, i) => {
        return (
            <>
            <fieldset key={i}  style={{display: "flex", margin:"30px", borderRadius: "10px"}}>
            <img src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="Poster" width="200" height="300" style={{borderRadius: "10px"}}></img>
            <div style={{margin:"30px"}}>
                <h2>{movie.title}</h2>
                <p>Overview: {movie.overview}</p>
                <p>Watched: </p>
                <button onClick={(e) => handleAdd(e, movie.id)}>Add To My Movies</button>
                <p>How Do You Like This Movie? </p>
                <Rating name="half-rating" precision={0.5}  defaultValue={10} onSelect={rate => setRating(rate)}/>
            </div>
        </fieldset>
        </>
        )
    }

    )
    
    const handleAdd = (e, id) => {
       
        setFavorite(id)
        
    }
    console.log(favorite)
    console.log(rating)
    const handleSave = () =>{
        history.push('/dashboard')

    }
    const pageCount = Math.ceil(movies.length/moviePerPage)
    const changePage = ({ selected })=>{
        setPageNumber(selected)
        setRating(0)

    };
    return (
        <>
        <h2>Welcome!</h2>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h2>Choose the movie you have watched: </h2>
            <div style={{margin: "10px"}}>
            </div>
        </div>
        
        <br></br>
        
        <div>
            {displayMovies}
            <ReactPaginate 
            prevPageRel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pbt"}
            previousLinkClassName={"prebtn"}
            nextLinkClassName={"nextbtn"}
            disabledClassName={"pad"}

        />
        <div style={{display: "flex", justifyContent: "center"}}>
        <button onClick={() => handleSave()} style={{backgroundColor: "white", width: "50px", height: "25px"}}>Save</button>
        </div>
        </div>
        
        
        
        </>
    )
    
}
export default Create;