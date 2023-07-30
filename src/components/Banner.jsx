import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import ColorThief from '/node_modules/colorthief/dist/color-thief.mjs';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import noimage from '../assets/no-image.svg'
import { useGetColor } from '../hooks/useGetColor';
import { BackgroundGradient } from './BackgroundGradient';


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

    // const colorThief = new ColorThief();
    // const img = new Image();
    // img.crossOrigin = 'Anonymous';
    // img.src = url;
    
    
    // async function getColor() {
        //     console.log(img.src);
        //     if (img.src === 'https://image.tmdb.org/t/p/w300undefined') return;
        //     const posterColor = await colorThief.getColor(img);
        //     return setColors(posterColor)
        // }

        const isPhone = useMediaQuery({
            query: '(max-width: 768px)'
          })
        
    const url = poster && `https://image.tmdb.org/t/p/w300${poster}`;
    const [colors, getColor, img] = useGetColor({url});
    
    useEffect(() => {
            img.addEventListener('load', getColor);   
    }, [loading])


    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')

      let hexColor = rgbToHex(colors[0], colors[1], colors[2]);
      console.log(hexColor);

    
    // console.log(releaseDate);
    const year = releaseDate?.split('-')[0];
    
    let hours = (runtime / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    // console.log(crew);
    
    const directors = crew.filter(({job}) => job === 'Director')
    const writers = crew.filter(({job}) => job === 'Screenplay' || job === 'Writer')

    // backgroundGradient.style.background = ``
    // console.log(writers);
    // console.log(directors);

      
    //   myFunction(x) // Call listener function at run time
    //   x.addListener(myFunction) // Attach listener function on state changes
    const backgroundImage = !isPhone ? `https://image.tmdb.org/t/p/w500${backdrop}` : null;

    return (
        <>  
            
                <section className="movieDetail-container mt-3 md:mt-10">
                
                    <div 
                        className={`banner-background md:h-fit md:bg-cover bg-no-repeat`}
                        // style={{
                        //     backgroundColor: `${hexColor}`
                        // }}
                        style={{
                                backgroundImage: `url(${backgroundImage})`
                                // backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop ? backdrop : null})`,
                        }}
                    >
                
                        {/* <div className="background-gradient bg-gradient-to-r backdrop-blur-lg pl-0 md:backdrop-blur-[2px] md:flex pt-6 pb-8 md:pb-44 md:pb-[3.2rem] md:pl-3" 
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 1) calc((50vw - 170px) - 340px), rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.84) 20%, rgba(0, 0, 0, 0.84) 100%)`,
                            }}
                        >   */}
                        <BackgroundGradient colors={colors} isPhone={isPhone}>
                        <div className="poster flex justify-center md:block md:ml-4">
                                {loading ?
                                <>
                                     { isPhone &&  
                                <div className='min-w-[150px] w-[150px] h-[200px] min-h-[200px] md:min-w-[250px] md:w-[250px] md:h-[375px] rounded-lg'>
                                <Skeleton width={150} height={200} style={{marginBottom: '20px'}}/>
                            </div>}
                              {  !isPhone &&
                                <div className='min-w-[150px] w-[150px] h-[200px] min-h-[200px] md:min-w-[250px] md:w-[250px] md:h-[375px] rounded-lg'>
                                    <Skeleton width={250} height={375}/>
                                </div>}
                                </>
                               : 
                                    <img 
                                        src={url ? url : noimage} 
                                        alt={title ? `${title} poster` : null}
                                        className="movie-poster object-cover min-w-[150px] w-[150px] h-[225px] md:min-w-[250px] md:w-[250px] md:h-[375px] rounded-lg"              
                                    />
                                }
           
                            </div>
                            <div className="info-container ml-2 md:ml-4 md:ml-7 md:mr-4">
                                {loading || loadingCrew ? 
                                <>
                                {isPhone && <>
                                    <h1 className="inline block mt-4 md:flex md:mt-2 md:mb-4"><Skeleton width={300} /></h1>
                                <p className='inline-block w-1/6 font-medium text-right'><Skeleton style={{display: 'inline-block'}}/></p>
                                <p className="my-5 text-white font-medium"><Skeleton height={50}/></p>
                                <p className="my-5 text-white font-medium"><Skeleton/></p>
                                </>}
                                {!isPhone && <>
                                    <h1 className="md:flex md:mt-2 md:mb-4"><Skeleton width={500} /></h1>
                                <p className='text-gray-50 font-medium'><Skeleton /></p>
                                <p className="my-5 text-white font-medium"><Skeleton height={50}/></p>
                                <p className="my-5 text-white font-medium"><Skeleton/></p>
                                        </>}
                        

                                </> : 
                                    <>
                                    <h1 className="inline-block w-4/5 text-3xl mt-5 md:mt-0 text-white text-center font-bold mb-4">{title} {year ? <span className='text-gray-200 font-normal'>({year})</span> : null }</h1>
                                    <p className='inline-block md:text-2xl text-xl w-1/6 text-right font-medium'><span className='text-yellow-300'>★</span>{voteAverage?.toFixed(1)}</p>
                                    <p className='text-gray-50 font-medium'>{rhours}h {rminutes}m</p>
                                    <p className="my-5 text-white font-medium">{overview}</p>
                                    
                                    <article className='flex items-center'>
                                    <ul className='min-w-[140px]'>    
                                    <p className='text-gray-100'>Directed by</p>
                                        {directors?.map((director) => {
                                            return (
                                                <li 
                                                    className='text-white font-medium inline-flex mr-2' 
                                                    key={director.id}
                                                >
                                                    {director.name}
                                                </li>
                                            )
                                        })}
                                    </ul>

                                    {writers.length > 0 ? 

                                    <ul className='ml-6'>
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
                                </>
                                }
                        
                            </div>

                        </BackgroundGradient>
                        
                        {/* </div> */}
                    </div>
                
            </section>
    
        </>
        
)

}

export { Banner }