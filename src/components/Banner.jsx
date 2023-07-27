import { useNavigate } from 'react-router-dom';
import ColorThief from '/node_modules/colorthief/dist/color-thief.mjs';
import { useEffect, useState } from 'react';
import noimage from '../assets/no-image.svg'


function Banner({
    id, 
    poster, 
    backdrop, 
    overview, 
    title, 
    loading, 
    releaseDate, 
    voteAverage, 
    runtime, 
    genres, 
    crew,
    loadingCrew,
}) 

{
    const navigate = useNavigate();
    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    if (poster !== undefined) {
        img.src = `https://image.tmdb.org/t/p/w300${poster}`;
    }
    console.log(poster);
    // [0, 0, 0], [150, 10, 0], [0, 0, 0]
    
    //color default is black
    const colorDefault = ['0', '0', '0'];
    const [colors, setColors] = useState([]);
    function getColor() {
        const posterColor = colorThief.getColor(img);
        setColors(posterColor)
    }
    useEffect(() => {
            img.addEventListener('load', getColor);   
    }, [loading])

    
    // console.log(releaseDate);
    const year = releaseDate?.split('-')[0];
    
    let hours = (runtime / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    // console.log(crew);
    
    const directors = crew.filter(({job}) => job === 'Director')
    const writers = crew.filter(({job}) => job === 'Screenplay' || job === 'Writer')
    console.log(writers);
    // console.log(directors);

    return (
        <>
            {loading || loadingCrew ? 
            ( <div>loading</div> ) : 
            (
                <section className="movieDetail-container mt-10">
                    <div 
                        className="banner-background h-fit bg-cover bg-no-repeat" 
                        style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
                        }}
                    >
                
                        <div className="backdrop-blur-lg md:backdrop-blur-[2px] flex pt-6 pb-44 md:pb-[3.2rem] pl-3" 
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(${colors ? colors[0] : colorDefault[0]}, ${colors ? colors[1] : colorDefault[1]}, ${colors ? colors[2] : colorDefault[2]}, 1) calc((50vw - 170px) - 340px), rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.84) 20%, rgba(0, 0, 0, 0.84) 100%)`,
                            }}
                        >  
                            <div className="poster ml-4">
                                <img 
                                    src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : noimage} 
                                    alt={`${title}} poster`}
                                    className="movie-poster object-cover min-w-[120px] w-[120px] h-[175px] md:min-w-[250px] md:w-[250px] md:h-[375px] rounded-lg "  
                                    
                                    />
                            </div>
                            <div className="info-container ml-8 mr-4">
                                <h1 className="inline-block w-4/5 text-3xl text-white text-center font-bold mb-4">{title} {year ? <span className='text-gray-200 font-normal'>({year})</span> : null }</h1>
                                <p className='inline-block text-2xl w-1/6 text-right font-medium'><span className='text-yellow-300'>★</span>{voteAverage?.toFixed(1)}</p>
                                <p className='text-gray-50 font-medium'>{rhours}h {rminutes}m</p>
                                <p className="my-5 text-white font-medium">{overview}</p>
                                
                                <article className='flex items-center'>
                                <ul>    
                                <p className='text-gray-100'>Directed by</p>
                                    {directors?.map((director) => {
                                        return (
                                            <li 
                                                className='text-white font-medium inline-flex mr-3' 
                                                key={director.id}
                                            >
                                                {director.name}
                                            </li>
                                        )
                                    })}
                                </ul>

                                {writers.length > 0 ? 

                                <ul className='ml-8'>
                                <p className='text-gray-100'>Written by</p>
                                    {writers?.map((writer) => {
                                        return (
                                        
                                            <li 
                                                className='text-white font-medium inline-flex mr-3' 
                                                key={writer.id}
                                            >
                                                {writer.name}
                                            </li>
                                          
                                        )
                                    })}
                                </ul> : null
                                }

                                </article>
                          
                                <ul className='mt-5 text-center'>
                                    {genres?.map((genre) => {
                                        return (
                                        
                                                <li onClick={() => navigate(`/category/${genre.id}/${genre.name}`)} 
                                                    key={genre.id}
                                                    className='cursor-pointer mr-1.5 inline-flex text-white font-medium border border-solid border-white rounded-2xl py-1 px-3 hover:bg-sky-600'>
                                                    {genre.name}
                                                </li>
                                            
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                
            </section>
    )}
        </>
        
)

}

export { Banner }