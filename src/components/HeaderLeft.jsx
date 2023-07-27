import logo from '../assets/movieapp-logo.svg'

function HeaderLeft() {
    return (
    <div className="header-container-left flex justify-around items-center pr-12">
        <a href="index.html" className="header-title flex text-3xl items-center">

            <img src={logo} width="42" height="42" alt="logo" />
            <h1 className='text-white'>MovieApp</h1>
        </a>    
            {/* <button className="hamburger-button inactive">
            <img src="./src/assets/burger-menu.svg" className="hamburger-menu" width="34" height="34" />

            </button> */}
    </div>

    )

}

export { HeaderLeft };