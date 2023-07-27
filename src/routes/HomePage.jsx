import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "../components/Header";
import { HeaderLeft } from "../components/HeaderLeft";
import { HeaderRight } from "../components/HeaderRight";
import { SearchForm } from "../components/SearchForm";
import { TrendingPreview } from "../components/TrendingPreview";
import { CategoriesPreview } from "../components/CategoriesPreview";

function HomePage() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    

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
            <TrendingPreview />
            <CategoriesPreview />
        </>
    )
}

export { HomePage };