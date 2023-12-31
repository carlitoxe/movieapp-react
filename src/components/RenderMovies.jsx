import { useNavigate } from "react-router-dom"
import noimage from '../assets/no-image.svg'
import { RenderMovieSkeleton } from "./RenderMovieSkeleton";
import { Card } from "./Card"; 

function RenderMovies({movies, loading, lastMovieElementRef}) {

    return (
        <>
        {
                  <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 md:gap-6 mb-6 px-3 md:px-5">
                   
                  { 

                movies.map((movie, i) => {
                    //   console.log(i);
                            return (<Card 
                                movie={movie}
                                loading={loading}
                                key={movie.id}
                                img={movie.poster_path}
                                movies={movies}
                                lastMovieElementRef={lastMovieElementRef}
                                i={i}
                            />)
                   })}
                   </div>
        
        }
        </>
    )
}

export { RenderMovies }