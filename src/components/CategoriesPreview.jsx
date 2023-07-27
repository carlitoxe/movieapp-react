import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetItemsAPI } from "../hooks/useApi";

function CategoriesPreview() {
    const navigate = useNavigate();

    const [categories, getCategories, loading] = useGetItemsAPI({destruct: "genres"})

    useEffect(() => {
        getCategories('genre/movie/list');
    }, [])


    return (
        <>
            <section className="px-8">
                <h1 className="mt-6 pl-6 text-2xl font-semibold text-white">Categories</h1>
                {loading ? (<div>Loading...</div>) :
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