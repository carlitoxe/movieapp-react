import { useRef, useEffect } from "react"
import { lazyLoading } from "../hooks/lazyLoading"
import noimage from '../assets/no-image.svg'


function CardActor({actor, img}) {
    const imgRef = useRef(null)

    useEffect(() => {
        if (imgRef.current) {
            lazyLoading(imgRef)
        }

    }, [img])

    return (
        <li className='w-[120px] md:min-w-[140px] md:w-[140px] shadow-md shadow-slate-700 my-3 ml-1' key={actor.id}>
            <img
                className="min-w-[120px] min-h-[152.172px] object-cover md:max-w-[138px] md:min-h-[175px] md:max-h-[175px] rounded-t-lg"
                data-src={actor.profile_path ? `https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}` : noimage} 
            ref={imgRef}
        
                alt={`${actor.name} picture`} 
            />
            <p className="mt-2 px-2 md:mt-3 md:px-3 text-base text-white font-semibold leading-5">{actor.name}</p>
            <p className="px-2 md:px-3 md:mt-1 pb-1 text-sm md:text-[0.9rem]">{actor.character}</p>
        </li>
    )
}

export { CardActor }