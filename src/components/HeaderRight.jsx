import { useState } from "react";
import { SearchForm } from "./SearchForm";


function HeaderRight() {
    
    
    return (
    <div className="header-container-right hidden md:flex items-center w-full md:w-fit">
        <select name="language" id="lang" className="select-language-container h-[30px] rounded-lg bg-gray-800 mr-3">
            <option className="optLang" value="en">🇺🇸 English</option>
            <option className="optLang" value="es-ES">🇪🇸 Spanish</option>
            <option className="optLang" value="fr">🇫🇷 French</option>
            <option className="optLang" value="pt-BR">🇵🇹 Portugues</option>
            <option className="optLang" value="es-VE">🇮🇹 Italian</option> 
        </select>

    </div>

    )
}

export { HeaderRight }