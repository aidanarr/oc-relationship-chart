import { useNavigate } from "react-router-dom"
import { useState } from "react"
import PropTypes from "prop-types";
import "../styles/Home.scss"

const Home = ({data, setCoordinates}) => {

    const [isClicked, setIsClicked] = useState()

    const nav = useNavigate();

    function handleClick(ev) {
        ev.preventDefault()
          const id = parseInt(ev.target.id);
          //obtain target coordinates
          const rect = ev.target.getBoundingClientRect();
          //give chara id to isClicked
          setIsClicked(id)
          //set target top and left coordinates
          setCoordinates(rect.top, rect.left)
          //redirect to character detail
          const character = data.filter((chara) => chara.id === id)
          setTimeout(() => {
            nav("/relationships/" + character[0].name)}, 
            1000)
      }

    function renderList() {
        return data.map((chara, i) => {
            return <div style={{  
                backgroundImage: `url(/oc-relationship-chart/assets/${chara.img}.png)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }} onClick={handleClick} className={`charabox ${isClicked === chara.id ? "clickedChara" : ""}`} id={chara.id} key={i}></div>
            })
    }

  return (
    <>
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
    data: PropTypes.array,
    setCoordinates: PropTypes.func
  };

export default Home