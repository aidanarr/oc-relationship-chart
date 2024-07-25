import "../styles/NotFound.scss"
import { Link } from 'react-router-dom'
import placeholder from "../images/placeholder.jpg"

const NotFound = () => {
  return (
    <div className="notFound">
      <p>Character not registered.</p>
      <img src={placeholder} />
      <div className="home">
        <Link className="home__link" to="/">← Back</Link>
      </div>
    </div>
  )
}

export default NotFound