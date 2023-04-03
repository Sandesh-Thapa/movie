import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useParams } from "react-router-dom"
import Banner from '../components/Banner'
import MovieDescription from '../components/MovieDescription'
import useFetch from "../hooks/useFetch"
import { movieType, singleMovieType } from '../types/movieTypes'

const MovieDetail = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API = import.meta.env.VITE_API;
  const { id } = useParams()
  const [movieData, setMovieData] = useState<movieType>({
    adult: false,
    backdrop_path: "",
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0
  })
  const { data, loading, error } = useFetch<singleMovieType>(`${API}movie/${id}?api_key=${API_KEY}`)

  useEffect(() => {
    if (data) {
      setMovieData({
        adult: data?.adult,
        backdrop_path: data?.backdrop_path,
        id: data.id,
        original_language: data?.original_language,
        original_title: data?.original_title,
        overview: data?.overview,
        popularity: data?.popularity,
        poster_path: data?.poster_path,
        release_date: data?.release_date,
        title: data?.title,
        video: data.video,
        vote_average: data?.vote_average,
        vote_count: data?.vote_count
      })
    }
  }, [data])

  if (loading) {
      return <Skeleton style={{height: "550px", borderRadius: 0}} baseColor="#202020" highlightColor="#444" />
  }
  
  return (
    <>
      <Banner movie={movieData} />
      <MovieDescription movie={data} />
    </>
  )
}

export default MovieDetail