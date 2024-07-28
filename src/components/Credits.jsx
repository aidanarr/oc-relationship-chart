import "../styles/Credits.scss"
import { Link } from "react-router-dom"

const Credits = ({renderCharacters}) => {


  return (
    <div className="credits-page">
        <p className="credits-page__text">Hello! First of all, thanks for checking my page. All characters displayed here are original and belong either to me or to one of my friends. Find the corresponding credits below.</p>
        <section className="credits">
        <div className="credits__author">
                <p>• Created by Aida (me) 
                    <span>
                        <a href="https://twitter.com/doromaya" target="_blank"><i className="fa-solid fa-link"></i></a>
                    </span>
                </p>
                <div className="credits__author--charas">
                {renderCharacters("Aida")}
            </div>            
            <div className="credits__author">
                <p>• Created by Beailish</p>
                <div className="credits__author--charas">
                {renderCharacters("Beailish")}
                </div>
            </div>
            <div className="credits__author">
                <p>• Created by Jen</p>
                <div className="credits__author--charas">
                {renderCharacters("Jen")}
                </div>
            </div>
            <div className="credits__author">
                <p>• Created by Kibu</p>
                <div className="credits__author--charas">
                {renderCharacters("Kibu")}
                </div>
            </div>
            <div className="credits__author">
                <p>• Created by Mizuki</p>
                <div className="credits__author--charas">
                {renderCharacters("Mizuki")}
                </div>
            </div>

                <div className="back">
                    <Link className="back__link" to="/">← Back</Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Credits