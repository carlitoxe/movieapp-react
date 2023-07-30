import { useNavigate } from "react-router-dom"
import { useState } from "react";

function SearchForm({value, setValue}) {
    const navigate = useNavigate();
    const [search, setSearch] = useState(value);

    const onSubmit = (e) => {
        e.preventDefault();

        if (search) {
            navigate(`/results?search=${search}`)
        } else {
            navigate('/')
        }
    }

    return (
        <div className="search-form-container md:px-8 w-full flex justify-center mt-4 md:mt-0 px-3 md:px-0">
        <form className="search-form rounded-full flex rounded-full p-1 h-[35px] bg-transparent  border border-gray-600 items-center" onSubmit={onSubmit}>
            <input value={search} onChange={e => setSearch(e.target.value.toLowerCase())} className="search-input p-1 rounded-full bg-transparent w-full px-4 focus:outline-none w-full placeholder:text-slate-500" type="text" placeholder="Search for movies..." />
            <button type="submit" className="search-button" onClick={() => setValue(search)}> 
                <svg width="1em" height="1em" viewBox="0 0 20 20" className="w-[18px] h-[18px] mr-3 align-middle text-gray-300 shrink-0 group-betterhover:hover:text-gray-70"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
        </form>
    </div>
    )
}

export { SearchForm }