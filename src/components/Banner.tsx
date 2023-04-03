import { Link } from "react-router-dom"
import { bannerPropType } from "../types/propTypes"

const Banner = ({movie, infoButton = false} : bannerPropType) => {
  return (
    <div
      className="hero-slider hero-shadow" 
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`
      }}
    >
      <div className="position-relative hp-100">
        <div className="caption position-absolute">
          <div className="col-12 col-md-6">
            <h1 className="fw-700 hero-text-shadow">{movie.title}</h1>
          </div>
          <div className="col-12 col-md-6 my-3">
            {infoButton &&
              <Link to={`/movie/${movie.id}`} className="btn px-3 py-2 banner-btn gray-text"><i className="fa-solid fa-circle-info"></i> More Info</Link>
            }
            <button className="btn px-3 py-2 banner-btn gray-text ms-2"><i className="fa-solid fa-circle-play"></i> Watch Trailer</button>
          </div>
          <div className="col-12 col-md-6">
            <p className="fw-400 hero-text-shadow gray-text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner