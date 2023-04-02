import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar" style={{zIndex: "9"}}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">MOVIEEE</Link>
      </div>
    </nav>
  )
}

export default Navbar