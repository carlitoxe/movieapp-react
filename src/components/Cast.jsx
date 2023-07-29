import { CardActor } from './CardActor'

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