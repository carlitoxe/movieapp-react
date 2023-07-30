import logo from '../assets/movieapp-logo.svg'

function HeaderLeft() {
    return (
    <div className="header-container-left flex justify-around items-center md:pr-12">
        <a href="index.html" className="header-title flex text-2xl md:text-3xl items-center">

            <img src={logo} className='w-[32px] md:w-[42px]' alt="logo" />
            <h1 className='text-white'>MovieApp</h1>
        </a>    
            {/* <button className="hamburger-button inactive">
            <img src="./src/assets/burger-menu.svg" className="hamburger-menu" width="34" height="34" />

            </button> */}
    </div>

    )

}

export { HeaderLeft };