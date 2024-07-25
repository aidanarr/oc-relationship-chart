import { Link } from "react-router-dom"
import "../styles/Footer.scss"

const Footer = () => {

  return (
    <footer className="footer">
        <div>
            <p>Created by Aida Narros</p>
            <a href="https://github.com/aidanarr/oc-relationship-chart" target="_blank">Check my code</a>
        </div>
        
        <button>
          <Link className="footer__link" to ="/credits">credits</Link>
        </button>
        
    </footer>
  )
}

export default Footer