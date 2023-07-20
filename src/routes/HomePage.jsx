import { useNavigate } from "react-router-dom";
import logo from '../assets/movieapp-logo.svg'

function HomePage() {
    // const navigate = useNavigate();

    return (
            <div className="header-container flex justify-around items-center">
                <div className="header-container-left flex justify-around items-center">
                    <a href="index.html" className="header-title flex text-3xl">
                
                        <img src={logo} width="42" height="42" alt="logo" />
                        <h1>MovieApp</h1>
                    </a>    
                        {/* <button className="hamburger-button inactive">
                        <img src="./src/assets/burger-menu.svg" className="hamburger-menu" width="34" height="34" />
                    
                        </button> */}
                </div>
      <div className="header-container-right flex items-center">

      <select name="language" id="lang" className="select-language-container h-7 rounded-lg bg-gray-800">
        <option className="optLang" value="en">🇺🇸 English</option>
      <option className="optLang" value="fr">🇫🇷</option>
        <option className="optLang" value="es-ES">🇪🇸</option>
        <option className="optLang" value="pt-BR">🇧🇷</option>
        <option className="optLang" value="es-VE">🇻🇪</option> 
      </select>

      <div className="search-form-container">
        <form className="search-form rounded-full flex rounded-full p-1 h-[35px] bg-gray-800 items-center">
          <input className="search-input p-1 rounded-full bg-transparent w-100 px-3 focus:outline-none" type="text" placeholder="Search for movies..." />
          <button type="submit" className="search-button"> 
            <svg width="1em" height="1em" viewBox="0 0 20 20" className="w-[18px] h-[18px] mr-3 align-middle text-gray-300 shrink-0 group-betterhover:hover:text-gray-70"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" stroke-width="2" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>
        </form>
      </div>
    </div>
    </div>
        
    )
}

export { HomePage };