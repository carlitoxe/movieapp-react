function Trailer({trailer, loading}) {
    return (
            trailer ? 
         <article className="mt-7 px-4 mb-10 md:mt-8 md:mr-1 md:px-10 md:mb-8">
            <h2 className="text-white text-2xl font-bold">Trailer</h2>
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
         </article> : null
         
    )
}

export { Trailer }