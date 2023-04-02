import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { TRENDING_TODAY } from "../constants/apiConstants"
import useFetch from "../hooks/useFetch"

import Banner from "./Banner"

export type movieType = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

const Slider = () => {
    const {data, loading, error} = useFetch<movieType[]>(TRENDING_TODAY)

    if (loading) {
        return <Skeleton style={{height: "550px", borderRadius: 0}} baseColor="#202020" highlightColor="#444" />
    }

    return (
        <div id="movieCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                {data && data.map((movie, index) => (
                    <div key={movie.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <Banner movie={movie} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Slider