import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='my-5 d-flex flex-column align-items-center'>
      <p className='text-center fw-400 gray-text'>Powered by </p>
      <Link to="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
        <img className='img-fluid' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TMDB" />
      </Link>
    </footer>
  )
}

export default Footer