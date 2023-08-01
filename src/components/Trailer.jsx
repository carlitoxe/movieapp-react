function Trailer({trailer, loading}) {
    return (
            trailer ? 
            <>
            <h2 className="text-white text-2xl font-bold ml-4 md:ml-8 mt-7">Trailer</h2>
             <article className="md:mt-0 px-4 mb-10 md:mr-1 md:px-20 md:mb-6">
            <div className="relative pt-[56.25%]">
            {
                !loading ? 
                <iframe
                    title={trailer?.name}
                    src={`https://www.youtube.com/embed/${trailer?.key}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full mt-4 absolute rounded-lg top-0"
                /> : <div>Loading...</div>

            }

            </div>
         </article>
            </>
         : null
         
    )
}

export { Trailer }