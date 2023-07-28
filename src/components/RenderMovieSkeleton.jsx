import Skeleton from "react-loading-skeleton"

function RenderMovieSkeleton({cards}) {
    return (
        Array(cards).fill(0).map((_, i) => {

      return (
        <div className="flex flex-col w-[200px]" key={i}>                               
            <div className="movie-img w-[200px] min-w-[200px] h-[300px] min-h-[300px] object-cover rounded-lg cursor-pointer">
                <Skeleton height={300} width={200} />
            </div>
                <p className="mt-2"><Skeleton count={2}/></p>
            
        </div>

      )  
        })
    )
 
}

export { RenderMovieSkeleton }