import { CardActor } from './CardActor'

function Cast({cast, loadingCast}) {
    // console.log(cast);
    return (
        <>
            {loadingCast ? 
            (<div>loading...</div>) :
            (   cast.length > 0 ? 
                <article className="mx-2 md:ml-8 mt-4 md:mt-8 md:r-4">
                    <h2 className="text-white ml-2 md:ml-0 text-2xl font-bold">Cast</h2>
                    <ol className="flex overflow-x-scroll overflow-y-hidden gap-3.5">
                        {cast.map((actor, i) => {
                            return (
                                <CardActor
                                    key={i} 
                                    actor={actor}
                                    img={actor.profile_path}
                                />
                            )
                        })}
                    </ol>
                </article> : null
            )}   
        </>
    )
}

export { Cast }