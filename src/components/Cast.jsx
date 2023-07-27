import noimage from '../assets/no-image.svg'

function Cast({cast, loadingCast}) {
    // console.log(cast);
    return (
        <>
            {loadingCast ? 
            (<div>loading...</div>) :
            (   cast.length > 0 ? 
                <article className="ml-8 mt-8 mr-4">
                    <h2 className="text-white text-2xl font-bold">Cast</h2>
                    <ol className="flex overflow-x-scroll overflow-y-hidden gap-3.5">
                        {cast.map(actor => {
                            return (
                                <li className='min-w-[140px] w-[140px] shadow-md shadow-slate-700 my-3 ml-1' key={actor.id}>
                                    <img
                                        className="max-w-[138px] min-h-[175px] max-h-[175px] rounded-t-lg"
                                        src={actor.profile_path ? `https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}` : noimage} 
                                        alt={`${actor.name} picture`} 
                                    />
                                    <p className="mt-3 px-3 text-white font-semibold">{actor.name}</p>
                                    <p className="px-3 mt-1 pb-1 text-[0.9rem]">{actor.character}</p>
                                </li>
                            )
                        })}
                    </ol>
                </article> : null
            )}   
        </>
    )
}

export { Cast }