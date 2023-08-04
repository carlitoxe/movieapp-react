import { useCallback, useContext, useEffect, useState } from "react";
import { useGetItemsAPI } from "../hooks/useApi"
import { useNavigate } from "react-router-dom";
import { MoviesPreview } from "./MoviesPreview";
import { UserContext } from "../context/userContext";
// import { RenderMovies } from "./RenderMovies";

function TrendingPreview() {
    const navigate = useNavigate();
    const [trends, getTrends, loadingTrends] = useGetItemsAPI({destruct: "results"})
    const {language, texts} = useContext(UserContext)

    const initialRequest = useCallback((lang) => {  
        getTrends('trending/movie/day', {language: lang});
    }, [])

    useEffect(() => {
        initialRequest(language)
    }, [initialRequest, language])

    // const { api } = useAPI()
    // const [ movies, setMovies ] = useState([]);

    // useEffect(() => {
    //     api.get('trending/movie/day').then((response) => {
    //         setMovies(response.data.results)
    //     })
    // }, [])


    // console.log(movies);
    return (
        <section id="trendingPreview" className="trendingPreview-container mt-2 md:mt-7 md:px-8 min-h-[420.188px]">
            <div className="trendingPreview-header flex justify-between items-center p-4 pb-2 md:p-4 md:pl-6 md:px-3">
                <h2 className="trendingPreview-title text-2xl font-semibold text-white">{texts.home.trends}</h2>
                <button 
                    className="trendingPreview-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => navigate('/trends')}
                >
                    {texts.preview.more}
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