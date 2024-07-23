import { useNavigate } from "react-router-dom"
import { useState } from "react"
import PropTypes from "prop-types";
import "../styles/Home.scss"

const Home = ({data}) => {

    const [isClicked, setIsClicked] = useState()
    const [top, setTop] = useState()
    const [left, setLeft] = useState()

    const nav = useNavigate();

    function handleClick(ev) {
        ev.preventDefault()
          const id = parseInt(ev.target.id);
          //obtain target coordinates
          const rect = ev.target.getBoundingClientRect();
          //give chara id to isClicked
          setIsClicked(id)
          //set target top and left coordinates
          setTop(rect.top)
          setLeft(rect.left)
          //redirect to character detail
          const character = data.filter((chara) => chara.id === id)
          setTimeout(() => {
            nav("/relationships/" + character[0].name)}, 
            4000)
      }

    function renderList() {
        return data.map((chara, i) => {
            return <div onClick={handleClick} className={`charabox ${isClicked === chara.id ? "clickedChara" : ""}`} id={chara.id} key={i}><p>{chara.name}</p></div>
            })
    }


  return (
    <>
        <style>
            {`
                .clickedChara {
                z-index: 1;
                animation: 1s clicked 2s ease-in-out forwards;
                }
                
                @keyframes clicked {
                0% {
                    position: absolute;
                    top: ${top}px;
                    left: ${left}px;
                
                }
                
                100% {
                    position: absolute;
                    top: 225.21250915527344px;
                    left: 743px;
                } 
            `}
    </style>
        <div className="charalist">
            <div className="charalist__container">
                <div className={`blank ${isClicked ? "blank-top" : false}`}>
                </div>
                {renderList()}
            </div>
        </div>
    </>
  )
}

Home.propTypes = {
    data: PropTypes.array
  };

export default Home