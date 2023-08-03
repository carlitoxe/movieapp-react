import { useContext, useEffect, useState } from "react";
import { useGetItemsAPI } from "../hooks/useApi";
import { RenderMovies } from "../components/RenderMovies";
import { Header } from "../components/Header";
import { HeaderLeft } from "../components/HeaderLeft";
import { HeaderRight } from "../components/HeaderRight";
import { SearchForm } from "../components/SearchForm";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { UserContext } from "../context/userContext";



function TrendingPage() {
    const { language, texts } = useContext(UserContext);
    const [trends, getTrends, loadingTrends,  getMoreMovies, hasMore] = useGetItemsAPI({destruct: "results"})
    const [query, setQuery] = useState('')

    const lastMovieElementRef = useInfiniteScroll(
		() => getMoreMovies("/trending/movie/day", {language}),
		loadingTrends,
		hasMore
	);

    useEffect(() => {
        getTrends('trending/movie/day', { language });
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
            <h1 className="text-center font-medium text-2xl md:text-3xl text-white mt-6 md:mt-10 mb-5 md:mb-8">{texts.trends.title}</h1>
            <RenderMovies 
                movies={trends}
                loading={loadingTrends}
                lastMovieElementRef={lastMovieElementRef}
            />
        </>
    )
}

export { TrendingPage };