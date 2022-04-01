import axios from "axios";
import { useEffect, useState } from "react";
import ShowMoreText from "react-show-more-text";


const MovieOfDay = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cdff4b50a037c5e018d0ad3e61ff1a47")
        .then(res => setMovies(res.data.results[4]))
        .catch(err => console.log("error: ", err))
    }, [])
    //console.log(movies)
    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    }

    return (
        <>

            <h2 style={{textAlign: "center"}}>Movie of the day</h2>
           
            <h3>{movies.title}</h3>
            <div style={{display: "flex"}}>
                <div> 
                    <img src={`https://image.tmdb.org/t/p/w500/` + movies.poster_path} alt="Poster" width="300px" height="400px" style={{borderRadius: "10px"}}></img>

                </div>
            
                <div style={{margin: "20px"}}>
                <ShowMoreText
                /* Default options */
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                onClick={executeOnClick}
                expanded={false}
                width={280}
                truncatedEndingComponent={"... "}>Overview: {movies.overview}</ShowMoreText>
                <br></br>
                <br></br>
                <br></br>
                <button style={{background: "white", width: "100px", height: "30px"}}>Watch</button>
            
            </div>
            </div>
           
            
            
           

           
            
        </>
       
    )

}
export default MovieOfDay