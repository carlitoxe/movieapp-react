
function Header({ children }) {
    return (
        <div className="header-container md:flex flex-col gap-4 md:flex-row justify-around items-center mt-8 px-20">
            {children}
        </div>
    )
}

export { Header };