import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetItemAPI, useGetItemsAPI } from "../hooks/useApi"
import { Header } from "../components/Header";
import { HeaderLeft } from "../components/HeaderLeft";
import { HeaderRight } from "../components/HeaderRight";
import { Banner } from '../components/Banner';
import { Cast } from "../components/Cast";
import { MoviesPreview } from "../components/MoviesPreview";
import { Trailer } from "../components/Trailer";
import { SearchForm } from "../components/SearchForm";

function MoviePage() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('')
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loadingMovie, getMovie] = useGetItemAPI({path: `movie/${id}`});
    const [crew, getCrew, loadingCrew] = useGetItemsAPI({destruct: 'crew'});
    const [cast, getCast, loadingCast] = useGetItemsAPI({destruct: 'cast'});
    const [videos, getVideos, loadingVideos] = useGetItemsAPI({destruct: 'results'});
    const [related, getRelated, loadingRelated] = useGetItemsAPI({destruct: 'results'});

    const initialRequest = async () => {
        const data = await getMovie();
        setMovie(data);
        getCrew(`movie/${id}/credits`);
        getCast(`movie/${id}/credits`);
        getVideos(`movie/${id}/videos`);
        getRelated(`movie/${id}/recommendations`);
    }
    
    useEffect(() => {
        initialRequest();
    }, [])

    // console.log(videos);
    const trailer = videos?.find(video => video.type === 'Trailer');


    // console.log(credits);
    // const { api } = useAPI();
    // const [ movie, setMovie ] = useState({});
    // const [ , , id] = location.hash.split('/'); 
    
    // useEffect(() => {
        //     api.get(`movie/${id}`).then((res) => {
            //         setMovie(res.data)
            //     })
            // }, [])

 
    
    // const imgSrc = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    // console.log(imgSrc);

    return (
        <>
           <Header>
                <HeaderLeft />
            <SearchForm 
            value={query}
            setValue={setQuery}
        />
                <HeaderRight />
            </Header>

            <Banner 
                id={id}
                poster={movie.poster_path && movie.poster_path}
                backdrop={movie.backdrop_path}
                overview={movie.overview}
                title={movie.title}
                loading={loadingMovie}
                releaseDate={movie.release_date}
                voteAverage={movie.vote_average}
                runtime={movie.runtime}
                genres={movie.genres}
                crew={crew}
                loadingCrew={loadingCrew}
            >
            </Banner>
            <Cast
                cast={cast}
                loadingCast={loadingCast}
             />
             <Trailer 
                trailer={trailer}
                loading={loadingVideos}
             />
      
                    {related.length > 0 ?
                    
                <article className="pt-3 md:pt-0 mb-5 md:px-8 md:mb-5">
                    <h2 className="ml-4 text-white text-2xl font-bold md:mb-3">Related Movies</h2>
                        <MoviesPreview 
                            movies={related}
                            loading={loadingRelated}
                        />  
                </article>
                         : null
                    }  

 
            
        </>
    )
    
}

export { MoviePage }