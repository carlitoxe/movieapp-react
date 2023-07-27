import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { SearchForm } from "../components/SearchForm";
import { Header } from "../components/Header";
import { HeaderLeft } from "../components/HeaderLeft";
import { HeaderRight } from "../components/HeaderRight";
import { useGetItemsAPI } from "../hooks/useApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { RenderMovies } from "../components/RenderMovies";

function SearchPage() {
    const { search } = useLocation();
    const [query, setQuery] = useState(new URLSearchParams(search).get("search"));
    
    const [movies, getMovies, loadingMovies, getMoreMovies, hasMore] = useGetItemsAPI({destruct: 'results'});
    console.log(movies.length);

    const lastMovieElementRef = useInfiniteScroll(
		() => getMoreMovies("/search/movie", { query }),
		loadingMovies,
		hasMore
	);

    useEffect(() => {
        getMovies(`search/movie`, { query })
    }, [query])

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
            <h1 className="text-center font-medium text-2xl text-white mt-10 mb-8">Search for {query}</h1>
                <RenderMovies 
                    movies={movies}
                    loading={loadingMovies}
                    lastMovieElementRef={lastMovieElementRef}
                />
                </>
                : <div className="text-center text-2xl mt-8">No Results for {query}</div>
            }

        </>
    )
}

export { SearchPage }