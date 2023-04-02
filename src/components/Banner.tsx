import { bannerPropType } from "../types/propTypes"

const Banner = ({movie} : bannerPropType) => {
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
          <div className="col-12 col-md-6">
            <p className="fw-400 hero-text-shadow gray-text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner