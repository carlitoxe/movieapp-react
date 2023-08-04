import { useEffect, useCallback, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useGetItemsAPI } from "../hooks/useApi";
import { UserContext } from "../context/userContext";


function CategoriesPreview() {
    const navigate = useNavigate();

    const [categories, getCategories, loading] = useGetItemsAPI({destruct: "genres"});
    const {language, texts} = useContext(UserContext);

    const isPhone = useMediaQuery({
        query: '(max-width: 768px)'
      })

      const initialRequest = useCallback((lang) => {  
        getCategories('genre/movie/list', {language: lang});
    }, [])

    useEffect(() => {
        initialRequest(language)
    }, [initialRequest, language])




    return (
        <>
            <section className="md:px-8 md:mb-8 md:mt-8">
                <h1 className="pl-4 md:pl-6 text-2xl font-semibold text-white">{texts.home.categories}</h1>
                {loading ? (!isPhone ? <div className="mt-5 px-8"> <Skeleton count={2}/> </div> : 
                <div className="mt-5 px-10"> <Skeleton count={6}/> </div>) :
                (<ul className='text-center mt-2'>  
                    {categories?.map((category) => {
                        
                        return (
                        
                                <li onClick={() => navigate(`category/${category.id}/${category.name}`)} 
                                    key={category.id}
                                    className='cursor-pointer mt-2.5 mr-1.5 inline-flex text-white font-medium border border-solid border-white rounded-2xl py-1 px-3 hover:bg-sky-600'>
                                    {category.name}
                                </li>
                            
                        )
                    })}
                </ul>
                )}
            </section>
        </>
    )
}

export { CategoriesPreview };