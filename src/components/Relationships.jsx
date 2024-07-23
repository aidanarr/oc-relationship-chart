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
        .animated-chara {
          position: absolute;
          text-align: center;
          min-width: 70px;
          min-height: 70px;
          max-width: 70px;
          max-height: 70px;
          border-radius: 100px;
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.23);
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
      <div className="animated-chara" style={{  
      backgroundImage: `url(./src/images/${data.img}.png)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      }}></div>
      <div ref={mainChara} className={`tree__chara tree__main-chara ${playAnimation ? "animationMainChara" : ""}`}  id={data.name} style={{  
      backgroundImage: `url(./src/images/${data.img}.png)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      }}>
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