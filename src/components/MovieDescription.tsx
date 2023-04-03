import { singleMovieType } from '../types/movieTypes'

const MovieDescription = ({ movie }: { movie: singleMovieType | null }) => {
    const displayRatingStar = (rating: number | undefined) => {
        rating = rating ? rating : 5
        const halfStar = Number.isInteger(rating)
        let stars = []
        for (let i = 0; i < rating; i++) {
            if (movie && i < movie?.vote_average) {
                stars.push(<i className="fas fa-star text-warning"></i>)
            } else {
                stars.push(<i className="far fa-star text-warning"></i>)
            }
        }

        !halfStar && stars.push(<i className="fa-solid fa-star-half text-warning"></i>)
        return stars
    }

    return (
      <div className="custom-container">
        <div className="row">
            <div className="col-12 col-sm-4">
                <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-8">
                <p className="fw-700 gray-text">{movie?.tagline}</p>
                {movie && movie.genres.length > 0 && <span className='fw-700'>Genres: </span>}
                {movie && movie.genres.map(genre => 
                    <span key={genre.id} className="badge bg-secondary mx-1">{genre.name}</span>
                )}
                <p className="fw-700 mt-2">Length: <span className="fw-400 gray-text">{movie?.runtime} min</span></p>
                <div className="row mt-5">
                    <div className="col-12 col-sm-6">
                        <p className="fw-400 gray-text">
                            <span className='fw-700'>Release Date:</span>
                            &nbsp;&nbsp;{movie?.release_date}
                        </p>
                        <p className="fw-400 gray-text">
                            <span className='fw-700'>Rating:</span>
                            &nbsp;&nbsp;
                            {[...displayRatingStar(movie?.vote_average)].map((star, index) => <span key={index}>{star}</span>) }
                        </p>
                        <p className="fw-400 gray-text">
                            <span className='fw-700'>Popularity:</span>
                            &nbsp;&nbsp;{movie?.popularity}
                        </p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <p className="fw-400 gray-text">
                            <span className='fw-700'>Original Language:</span>
                            &nbsp;&nbsp;{movie?.original_language}
                        </p>
                        <p className="fw-400 gray-text">
                            <span className='fw-700'>Original Title:</span>
                            &nbsp;&nbsp;{movie?.original_title}
                        </p>
                        <p className="fw-400 gray-text">
                            <span className='fw-700'>Vote Count:</span>
                            &nbsp;&nbsp;{movie?.vote_count}
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    {movie && movie?.production_companies.length > 0 && <p className="fw-700">Production Companies: </p>}
                    {movie && movie?.production_companies.map(company => 
                        <img title={company.name} className='company-logo mx-1 img-fluid' key={company.id} src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} alt={company.name} />
                    )}
                </div>
            </div>
        </div>
      </div>
    )
}

export default MovieDescription
