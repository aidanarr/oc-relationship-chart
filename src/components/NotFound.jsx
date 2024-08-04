import "../styles/NotFound.scss"
import { Link } from 'react-router-dom'
import placeholder from "../images/placeholder.jpg"
import PropTypes from "prop-types";

const NotFound = ({name}) => {
  
  return (
    <div className="notFound">
      <p>Character not registered.</p>
      <img src={name ? `/oc-relationship-chart/assets/${name.toLowerCase()}.png` : placeholder} />
      <div className="home">
        <Link className="home__link" to="/">← Back</Link>
      </div>
    </div>
  )
}

NotFound.propTypes = {
  name: PropTypes.string
};


export default NotFound