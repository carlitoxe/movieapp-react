import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const MoviePreviewSkeleton = ({cards}) => {
    return (
        Array(cards).fill(0).map((_, i) => {
            return (
                <div className="flex flex-col max-w-[150px]" key={i}>
                    <div className="movie-img w-[150px]  h-[225px] min-w-[150px] rounded-lg cursor-pointer">
                        <Skeleton width={150} height={225} />
                    </div>
                    <div className="mt-2"><Skeleton count={2} /></div>
                
                </div>
            )

        })
    )
}

export { MoviePreviewSkeleton }