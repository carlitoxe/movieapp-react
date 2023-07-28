import { useEffect, useRef } from "react"
import { lazyLoading } from "../hooks/lazyLoading"
import { useNavigate } from "react-router-dom"

function PreviewCard({movie, loading, img}) {

    const imgRef = useRef(null)
    const navigate = useNavigate();
    

    useEffect(() => {
        if (imgRef.current) {
            lazyLoading(imgRef)
        }

    }, [img])

    return (
        <div className="flex flex-col max-w-[150px]" key={movie.id}>
        <img 
            data-src={`https://image.tmdb.org/t/p/w300${img}`} 
            alt={`${movie.title} poster`} 
            className="movie-img w-[150px]  h-[225px] min-w-[150px] rounded-lg cursor-pointer"
            ref={imgRef}
            onClick={() => {
                navigate(`/movie/${movie.id}`)
               navigate(0)
            }}
        />
  
    <p className="mt-2"><span className="text-yellow-300">★</span> {movie.vote_average.toFixed(1)}</p>
    <a className="cursor-pointer hover:text-blue-700 mt-0.5" onClick={() => navigate(`/movie/${movie.id}`)}>{movie.title}</a>
</div>
    )
}

export {PreviewCard}