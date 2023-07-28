import { useEffect, useRef } from "react"
import { lazyLoading } from "../hooks/lazyLoading"
import { useNavigate } from "react-router-dom"
import noimage from '../assets/no-image.svg'


function Card({movie, loading, img, movies, lastMovieElementRef, i}) {
    const imgRef = useRef(null)
    const navigate = useNavigate();
    

    useEffect(() => {
        if (imgRef.current) {
            lazyLoading(imgRef)
        }

    }, [img])

    return (
        <div className="flex flex-col w-[200px]" key={movie.id} ref={i === movies.length - 1 ? lastMovieElementRef: null}>
                               
        <img 
            data-src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : noimage} 
            alt={`${movie.title} poster`} 
            ref={imgRef}
            className="movie-img w-[200px] min-w-[200px] h-[300px] min-h-[300px] object-cover rounded-lg cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
        />
  
    <p className="mt-2"><span className="text-yellow-300">★</span> {movie.vote_average.toFixed(1)}</p>
    <a className="cursor-pointer hover:text-blue-700 mt-0.5" onClick={() => navigate(`/movie/${movie.id}`)}>{movie.title}</a>
</div>
    )
}

export { Card }