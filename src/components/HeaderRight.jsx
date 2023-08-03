import { useContext, useState } from "react";
import { SearchForm } from "./SearchForm";
import { UserContext } from "../context/userContext";
import { SelectLanguage } from "./SelectLanguage";


function HeaderRight() {
    const { language, setLanguage, texts } = useContext(UserContext);
    console.log(language);
    
    return (
    <div className="header-container-right hidden md:flex items-center w-full md:w-fit">
        <SelectLanguage 
            title={texts.header.title} 
            options={texts.header.languages} 
            setValue={setLanguage} 
            value={language} 
        />

    </div>

    )
}

export { HeaderRight }