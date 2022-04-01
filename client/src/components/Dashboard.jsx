import { useEffect, useState } from "react";
import axios from "axios";
import MovieOfDay from "./MovieOfDay";
import ImageSlider from "./ImageSlider";
import { SliderData } from './SliderData';
import { useHistory } from "react-router-dom";
const Dashboard = () => {

    const [movieList, setMovieList] = useState([])
    
    const [movieInfo, setMovieInfo] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get("http://localhost:8000/api/user/624367bb4900bcb7787add40")
        .then(res =>{
            setMovieList(res.data)
            return res.data

        } )
        .then(res => {
            const movie_ids = res.movie_ids
            for(const i in movie_ids ){
                axios.get(`https://api.themoviedb.org/3/movie/${movie_ids[i]}?api_key=cdff4b50a037c5e018d0ad3e61ff1a47`)
                .then(res => setMovieInfo(res.data))
                .catch(err => console.log("err", err))
            }
        } )
        
        .catch(err => console.log("error: ", err))
    }, [])
    const handleAdd = () => {
        history.push('/create')
        
    }
    
    
    return (
        <div >
            <div>
                <h1>Dashboard</h1>
                <h2>Your Movie List: </h2>
                <button style={{ marginLeft: "30px", background: "white"}} onClick={() => handleAdd()}>Add a movie</button>
                
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}> 
                
                <div style={{width: "35%", height: "400px", textAlign: "center", marginTop: "-100px", marginLeft: "10px"}}>
                    <ImageSlider slides={SliderData}></ImageSlider>
                </div>
                <div style={{width: "35%", height: "400px"}}>
                        <MovieOfDay/>
                </div>
                
            </div>
        </div>

    );
}
export default Dashboard;