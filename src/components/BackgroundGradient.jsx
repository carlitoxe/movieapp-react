function BackgroundGradient({children, colors, isPhone}) {
    const gradientDirection = isPhone ? 'bottom' : 'right';
    const percentage = isPhone ? '40%' : '20%'

    return (
        <div className="background-gradient pl-0 md:backdrop-blur-[2px] md:flex pt-6 pb-8 md:pb-44 md:pb-[3.2rem] md:pl-3" 
                            style={{
                                backgroundImage: `linear-gradient(to ${gradientDirection}, rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 1) calc((50vw - 170px) - 340px), rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.84) ${percentage}, rgba(0, 0, 0, 0.84) 100%)`,
                            }}
        >
            {children}
        </div>  
    )
}

export { BackgroundGradient }