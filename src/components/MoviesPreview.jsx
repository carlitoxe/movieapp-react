import { useNavigate } from "react-router-dom"
import { MoviePreviewSkeleton } from "./MoviePreviewSkeleton";
import { lazyLoading } from "../hooks/lazyLoading";
import { useEffect, useRef, version } from "react";
import { PreviewCard } from "./PreviewCard";

function MoviesPreview({movies, loading}) {

    
    return (
        <article className="trendingPreview-movieList flex overflow-x-scroll overflow-y-hidden gap-3.5 pt-3.5 px-3 pb-2">
    
        {!loading ? (movies.filter(movie => movie.poster_path).map((movie, i) => {

        return(
            <PreviewCard 
              movie={movie}
              key={i}
              loading={loading}
              img={movie.poster_path}
            />
        ) 
        }) ) : <MoviePreviewSkeleton cards={10} />

        }

    {/* <div className="movie-container">
        <img 
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg" 
            className="movie-img w-[150px] h-[225px] min-w-[150px] rounded-lg"
            alt="Movie name"
        />
        <p className="mt-1">Movie score</p>
        <p>Movie title</p>
    </div> */}
    </article>

    )
}

export { MoviesPreview }