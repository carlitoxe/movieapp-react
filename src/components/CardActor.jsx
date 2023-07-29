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
        <li className='min-w-[140px] w-[140px] shadow-md shadow-slate-700 my-3 ml-1' key={actor.id}>
            <img
                className="max-w-[138px] min-h-[175px] max-h-[175px] rounded-t-lg"
                data-src={actor.profile_path ? `https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}` : noimage} 
            ref={imgRef}
        
                alt={`${actor.name} picture`} 
            />
            <p className="mt-3 px-3 text-white font-semibold">{actor.name}</p>
            <p className="px-3 mt-1 pb-1 text-[0.9rem]">{actor.character}</p>
        </li>
    )
}

export { CardActor }