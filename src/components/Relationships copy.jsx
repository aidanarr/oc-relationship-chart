import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Relationships.scss"
import { useRef } from "react"

const Relationships = ({renderRelationships, renderArrows, getCharaData, clicked, top, left}) => {

    const [playAnimation, setPlayAnimation] = useState(false)
    const [currentTop, setCurrentTop] = useState()
    const [currentLeft, setCurrentLeft] = useState()

    const {name} = useParams();

    const mainChara = useRef();

    useEffect(() => {
      try {
        const rect = mainChara.current.getBoundingClientRect();
        setCurrentLeft(rect.left);
        setCurrentTop(rect.top);
      } catch (e) {
        return null
      }
    }, [name])
  
    const data = getCharaData(name);

    useEffect(() => {
      setPlayAnimation(false)
      setTimeout(() => {
        setPlayAnimation(true)
      }, 100)
    }, [clicked])

  return (
    <div className="tree">
      <style>
      {`
        .prueba {
          position: absolute;
          text-align: center;
          min-width: 50px;
          min-height: 50px;
          max-width: 50px;
          max-height: 50px;
          border-radius: 100px;
          border: 1px solid black;
          background-color: white;
          z-index: 1;
          opacity: 1;
          top: ${top}px;
          left: ${left}px;
          animation: clicked 2s ease-in-out forwards;
         }
        
         @keyframes clicked {
          0% {
            opacity: 1;
            top: ${top}px;
            left: ${left}px;
        
          }
        
          90% {
            opacity: 1;
            top: ${currentTop}px;
            left: ${currentLeft}px;
          }

          100% {
            opacity: 0;
            display: none;
            top: ${currentTop}px;
            left: ${currentLeft}px;
          }
        
        `
      }
      </style>
      <div className="prueba"></div>
      <div ref={mainChara} className="tree__chara tree__main-chara" id={data.name}>
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