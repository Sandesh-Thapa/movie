import { Link } from "react-router-dom"
import { movieCardPropType } from "../types/propTypes"

const MovieCard = ({movie}: movieCardPropType) => {
  return (
    <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
        </Link>
    </div>
  )
}

export default MovieCard