import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { RenderMovies } from "../components/RenderMovies";
import { useGetItemsAPI } from "../hooks/useApi";
import { Header } from "../components/Header";
import { HeaderLeft } from "../components/HeaderLeft";
import { HeaderRight } from "../components/HeaderRight";
import { SearchForm } from "../components/SearchForm";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { UserContext } from "../context/userContext";

function CategoryPage() {
    const { language, texts } = useContext(UserContext);
    const { id, name } = useParams();
    const [query, setQuery] = useState('')

    const [movies, getMovies, loading, getMoreMovies, hasMore] = useGetItemsAPI({destruct: "results"})

    const lastMovieElementRef = useInfiniteScroll(
		() => getMoreMovies("/discover/movie", { with_genres: id, language}),
		loading,
		hasMore
	);
    
    // const [categories, getCategories, loadingCategories] = useGetItemsAPI({destruct: "genres"})

    useEffect(() => {
        getMovies('discover/movie', { with_genres: id , language});
        // getCategories('genre/movie/list');
    }, [id, language])

    // console.log(categories);
    // const category = categories.find(category => category.id == id)
    // console.log(category);
    // const categoryName = category?.name;

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
            <h1 className="text-center font-medium text-2xl md:text-3xl text-white mt-6 md:mt-10 mb-4 md:mb-8">{name}</h1>
            <RenderMovies 
                movies={movies}
                loading={loading}
                lastMovieElementRef={lastMovieElementRef}
            />
        </>
    )

}

export { CategoryPage }