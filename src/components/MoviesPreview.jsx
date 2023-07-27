import { useNavigate, Link } from "react-router-dom"

function MoviesPreview({movies, loading, link}) {
    const navigate = useNavigate();
    return (
        <article className="trendingPreview-movieList flex overflow-x-scroll overflow-y-hidden gap-3.5 pb-2.5">
                    
        {!loading ? (movies.filter(movie => movie.poster_path).map(movie => {

        return(

            <div className="flex flex-col max-w-[150px]" key={movie.id}>
                    <img 
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                        alt={`${movie.title} poster`} 
                        className="movie-img w-[150px]  h-[225px] min-w-[150px] rounded-lg cursor-pointer"
                        onClick={() => {
                            navigate(`/movie/${movie.id}`)
                           navigate(0)
                        }}
                    />
              
                <p className="mt-2"><span className="text-yellow-300">★</span> {movie.vote_average.toFixed(1)}</p>
                <a className="cursor-pointer hover:text-blue-700 mt-0.5" onClick={() => navigate(`/movie/${movie.id}`)}>{movie.title}</a>
            </div>
        ) 
        }) ) : <p>Loading...</p>

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