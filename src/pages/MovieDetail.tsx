import { useParams } from "react-router-dom"

const MovieDetail = () => {
  const {id} = useParams()
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail