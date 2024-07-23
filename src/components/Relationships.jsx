import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Relationships.scss"

const Relationships = ({renderRelationships, renderArrows, getCharaData, clicked}) => {

    const [playAnimation, setPlayAnimation] = useState(false)

    const {name} = useParams();

    const data = getCharaData(name);

    useEffect(() => {
      setPlayAnimation(false)
      setTimeout(() => {
        setPlayAnimation(true)
      }, 100)
    }, [clicked])

  return (
    <div className="tree">
      <div className="tree__chara tree__main-chara" id={data.name}>
        {data.name}
      </div>
      <div className={`charainfo hidden`}>
          <div>
            <p className="charaname">{data.name} {data.surname}</p>
            <p>{data.pronouns}</p>
            <p>Age: {data.age}</p>
            <p>Owner: {data.creator}</p>
            <p>&quot;{data.desc}&quot;</p>
          </div>
      </div>
      <div className={`children ${playAnimation ? "animation" : ""}`}>
        {renderRelationships(data)}
      </div>
      <div className={`arrows ${playAnimation ? "animationArrows" : ""}`}>
        {renderArrows(data)}
      </div>
      <div className="legend-box">
        <div className="legend">
            <p>Family</p>
            <p>Friendship</p>
            <p>Romance</p>
            <p>Rivalry</p>
            <p className="legend__last">Misc</p>  
        </div>
        <div className="home">
          <Link className="home__link" to="/">← Back</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Relationships