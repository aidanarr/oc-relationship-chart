import "../styles/NotFound.scss"
import { Link } from 'react-router-dom'
import placeholder from "../images/placeholder.jpg"
import PropTypes from "prop-types";

const NotFound = ({name}) => {

  function addPlaceholder(ev) {
    ev.target.src = placeholder;
 }
  
  return (
    <div className="notFound">
      <p className="notFound__name">{name}</p>
      <p>Character not registered.</p>
      <img src={`/oc-relationship-chart/assets/${name.toLowerCase()}.png`} 
      onError={addPlaceholder}/>
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