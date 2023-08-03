import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { SearchForm } from "../components/SearchForm";
import { Header } from "../components/Header";
import { HeaderLeft } from "../components/HeaderLeft";
import { HeaderRight } from "../components/HeaderRight";
import { useGetItemsAPI } from "../hooks/useApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { RenderMovies } from "../components/RenderMovies";
import { UserContext } from "../context/userContext";

function SearchPage() {
    const { language, texts } = useContext(UserContext);
    const { search } = useLocation();
    const [query, setQuery] = useState(new URLSearchParams(search).get("search"));
    const [movies, getMovies, loadingMovies, getMoreMovies, hasMore] = useGetItemsAPI({destruct: 'results'});
    
    // console.log(movies.length);
    const lastMovieElementRef = useInfiniteScroll(
		() => getMoreMovies("/search/movie", { query }),
		loadingMovies,
		hasMore
	);

    useEffect(() => {
        getMovies(`search/movie`, { query, language })
    }, [query, language])

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
            
            {movies.length > 0 ? 
            <>
            <h1 className="text-center font-medium text-xl md:text-2xl text-white px-4 mt-6 md:mt-10 mb-4 md:mb-8">{texts.search.title} <span className="font-bold italic">"{query.trim()}"</span></h1>
                <RenderMovies 
                    movies={movies}
                    loading={loadingMovies}
                    lastMovieElementRef={lastMovieElementRef}
                />
                </>
                : <div className="text-center font-medium text-xl md:text-2xl text-white mt-6 md:mt-10 mb-8">{texts.search.firstError} <span className="font-bold italic">"{query.trim()}".</span> {texts.search.secondError}</div>
            }

        </>
    )
}

export { SearchPage }