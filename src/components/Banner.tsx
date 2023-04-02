import { movieType } from "./Slider"

type bannerPropTypes = {
  movie: movieType
}


const Banner = ({movie} : bannerPropTypes) => {
  return (
    <div
    className="hero-slider hero-shadow" 
    style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`
    }}>
      <div className="position-relative hp-100">
        <div className="caption position-absolute">
          <div className="col-12 col-md-6">
            <h1 className="fw-700 hero-text-shadow">{movie.title}</h1>
          </div>
          <div className="col-12 col-md-6">
            <p className="fw-400 hero-text-shadow">{movie.overview}</p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Banner