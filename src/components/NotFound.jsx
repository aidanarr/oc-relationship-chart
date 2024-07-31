import "../styles/NotFound.scss"
import { Link } from 'react-router-dom'
import placeholder from "../images/placeholder.jpg"

const NotFound = ({name}) => {

  console.log(name)
  
  return (
    <div className="notFound">
      <p>Character not registered.</p>
      <img src={name ? `./src/images/${name}.png` : placeholder} />
      <div className="home">
        <Link className="home__link" to="/">← Back</Link>
      </div>
    </div>
  )
}

export default NotFound