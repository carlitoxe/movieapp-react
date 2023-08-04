import { useContext, useState } from 'react';
import logo from '../assets/movieapp-logo.svg'
import { SelectLanguage } from './SelectLanguage';
import { UserContext } from '../context/userContext';

function HeaderLeft() {
    const { language, setLanguage, texts } = useContext(UserContext);
    console.log(language);

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <>
    <div className="header-container-left flex md:justify-start px-8 md:px-0     justify-between items-center md:pr-7">
        <a href="index.html" className="header-title flex text-2xl md:text-3xl items-center">

            <img src={logo} className='w-[32px] h-[32px] md:w-[42px] md:h-[42px]' alt="logo" />
            <h1 className='text-white'>MovieApp</h1>
        </a>    
            {/* <button className="hamburger-button inactive">
            <img src="./src/assets/burger-menu.svg" className="hamburger-menu" width="34" height="34" />

            </button> */}

             <section className="MOBILE-MENU flex justify-end md:hidden">
    <div
      className="HAMBURGER-ICON space-y-[7px]"
      onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
    >
      <span className="block h-0.5 w-7 bg-gray-300"></span>
      <span className="block h-0.5 w-7 bg-gray-300"></span>
      <span className="block h-0.5 w-7 bg-gray-300"></span>
    </div>

    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
      <div
        className="CROSS-ICON absolute top-0 right-0 px-8 py-4"
        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
      >
        <svg
          className="h-8 w-8 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center min-h-[250px]">
        <li className="mt-20">
        <SelectLanguage 
          title={texts.header.title} 
          options={texts.header.languages} 
          setValue={setLanguage} 
          value={language}
          setIsNavOpen={setIsNavOpen} 
      />
        </li>
      </ul>
    </div>
    <style>{`
.hideMenuNav {
  display: none;
}
.showMenuNav {
  display: block;
  position: absolute;
  width: 70%;
  height: 100vh;
  top: 0;
  right: 0;
  background: black;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.select-language-container {
    
}
`}</style>
  </section>


            
    </div>

{/*     
    <div className="flex items-center justify-end border-b border-gray-400 py-8">

<nav>
  <section className="MOBILE-MENU flex justify-end lg:hidden">
    <div
      className="HAMBURGER-ICON space-y-2"
      onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
    >
      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
    </div>

    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
      <div
        className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
      >
        <svg
          className="h-8 w-8 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center min-h-[250px]">
        <li className="mt-20">
        <SelectLanguage 
          title={texts.header.title} 
          options={texts.header.languages} 
          setValue={setLanguage} 
          value={language} 
      />
        </li>
      </ul>

    </div>
    <style>{`
.hideMenuNav {
  display: none;
}
.showMenuNav {
  display: block;
  position: absolute;
  width: 80%;
  height: 100vh;
  top: 0;
  right: 0;
  background: black;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
`}</style>
  </section>


</nav>
<style>{`
.hideMenuNav {
  display: none;
}
.showMenuNav {
  display: block;
  position: absolute;
  width: 80%;
  height: 100vh;
  top: 0;
  right: 0;
  background: black;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
`}</style>
</div> */}

    </>

    

    )

}

export { HeaderLeft };