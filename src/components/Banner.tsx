import axios from "axios"
import { useState } from "react"
import { createPortal } from "react-dom"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { videoType } from "../types/movieTypes"
import { bannerPropType } from "../types/propTypes"
import YouTube from "react-youtube"

const Banner = ({ movie, infoButton = false }: bannerPropType) => {
  const [isOpen, setIsOpen] = useState(false)
  const [videos, setVideos] = useState<videoType[]>([])
  const [activeVideo, setActiveVideo] = useState<string | undefined>("")
  const [loading, setLoading] = useState(false)
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API = import.meta.env.VITE_API;

  const openTrailerModal = () => {
    setLoading(true)
    setIsOpen(true)
    axios.get(`${API}movie/${movie.id}/videos?api_key=${API_KEY}`)
      .then(res => {
        setVideos(res.data.results)
        setActiveVideo(res.data.results[0].key)
      })
      .catch(() => {
        toast.error("Error getting trailer videos !", {hideProgressBar: true, theme: "dark"})
        setIsOpen(false)
      })
      .finally(() => setLoading(false))

  }


  return (
    <>
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
              <Link to={`/movie/${movie.id}`} className="btn px-3 py-2 banner-btn text-white"><i className="fa-solid fa-circle-info"></i> More Info</Link>
            }
            <button className="btn px-3 py-2 banner-btn text-white ms-2" onClick={openTrailerModal}>
              <i className="fa-solid fa-circle-play"></i> Videos
            </button>
          </div>
          <div className="col-12 col-md-6">
            <p className="fw-400 hero-text-shadow gray-text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
      
    {isOpen &&
      createPortal(
        <div className="modal-wrapper">
          <i className="fa-solid fa-times fa-2xl position-absolute cursor-pointer" style={{ right: "10px", top: "20px", zIndex: "10" }} onClick={() => setIsOpen(false)} />
          <div className="modal-content hp-100">
            {loading ?
              <Skeleton style={{ height: "100%", borderRadius: 0 }} baseColor="#202020" highlightColor="#444" />
              :
              (
                <div className="row hp-100">
                  <div className="col-12 col-md-10 youtube-wrapper">
                    <YouTube videoId={activeVideo} className="hp-100" iframeClassName="wp-100 hp-100" />
                  </div>
                  <div className="col-12 col-md-2 order-md-first">
                    <h5 className="fw-700 py-3">Videos</h5>
                    <div className="video-list-wrapper">
                      {videos.map(video => (
                        <div
                          key={video.id}
                          className={`d-flex align-items-center mb-3 pe-1 cursor-pointer video-list ${activeVideo === video.key ? 'active-video-list' : ''}`}
                          onClick={() => setActiveVideo(video.key)}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
                            alt={video.name}
                            className="img-fluid me-2"
                          />
                          <p className="fw-400 mb-0">
                            {activeVideo === video.key && <i className="fa-solid fa-circle-play me-2"></i>}
                            {video.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>,
        document.getElementById("portal") as HTMLElement
      )
    }

    </>
  )
}

export default Banner