import { useEffect, useState } from "react";
import { useGetItemsAPI } from "../hooks/useApi"
import { useNavigate } from "react-router-dom";
import { MoviesPreview } from "./MoviesPreview";
// import { RenderMovies } from "./RenderMovies";

function TrendingPreview() {
    const navigate = useNavigate();
    const [trends, getTrends, loadingTrends] = useGetItemsAPI({destruct: "results"})

    useEffect(() => {
        getTrends('trending/movie/day');
    }, [])

    // const { api } = useAPI()
    // const [ movies, setMovies ] = useState([]);

    // useEffect(() => {
    //     api.get('trending/movie/day').then((response) => {
    //         setMovies(response.data.results)
    //     })
    // }, [])


    // console.log(movies);
    return (
        <section id="trendingPreview" className="trendingPreview-container mt-2 md:mt-5 md:px-8">
            <div className="trendingPreview-header flex justify-between items-center p-4 pb-2 md:p-6 md:mb-2">
                <h2 className="trendingPreview-title text-2xl font-semibold text-white">Trending</h2>
                <button 
                    className="trendingPreview-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => navigate('/trends')}
                >
                    See more
                </button>
            </div>

            <MoviesPreview 
                movies={trends}
                loading={loadingTrends}
            />
        </section>  
    )
}

export { TrendingPreview }