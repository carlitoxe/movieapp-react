import { useEffect, useRef } from "react"
import { lazyLoading } from "../hooks/lazyLoading"
import { useNavigate } from "react-router-dom"
import noimage from '../assets/no-image.svg'
import { RenderMovieSkeleton } from "./RenderMovieSkeleton"


function Card({movie, loading, img, movies, lastMovieElementRef, i}) {
    const imgRef = useRef(null)
    const navigate = useNavigate();
    

    useEffect(() => {
        if (imgRef.current) {
            lazyLoading(imgRef)
        }

    }, [img])

    return (
  
    <div className="flex flex-col w-[162px] md:w-[200px] border rounded-lg border-gray-600" key={movie.id} ref={i === movies.length - 1 ? lastMovieElementRef: null}>
                               
        <img 
            data-src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : noimage} 
            alt={`${movie.title} poster`} 
            ref={imgRef}
            className="movie-img md:hover:scale-110 transition duration-500 w-[162px] h-[240px] min-h-[240px] md:mb-2 md:w-[198px] md:min-w-[198px] md:h-[300px] md:min-h-[300px] object-cover rounded-lg cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
        />
  
        <p className="mt-2 px-2"><span className="text-yellow-300">★</span> {movie.vote_average.toFixed(1)}</p>
        <a className="cursor-pointer px-2 pb-1 hover:text-blue-700 mt-0.5 mb-1" onClick={() => navigate(`/movie/${movie.id}`)}>{movie.title}</a>
    </div>

        
    )
}

export { Card }