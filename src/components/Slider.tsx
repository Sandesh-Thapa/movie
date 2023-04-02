import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import useFetch from "../hooks/useFetch"
import { movieType } from "../types/movieTypes"
import MovieCard from './MovieCard'
import { sliderPropType } from '../types/propTypes'

const Slider = ({title, url}: sliderPropType) => {
    const {data, loading, error} = useFetch<movieType[]>(url)

    if (loading) {
        return <Skeleton style={{height: "550px", borderRadius: 0}} baseColor="#202020" highlightColor="#444" />
    }
    return (
        <div className="container-fluid mb-5">
            <h5 className="fw-700 gray-text">{title}</h5>
            <div className="px-3 d-flex mt-4 movie-slider-wrapper">
                {data && data.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Slider