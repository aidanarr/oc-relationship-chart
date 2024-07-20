import datacopy from "../services/data-copy.json"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const List = () => {


    const [array, setArray] = useState(datacopy)
    const [isClicked, setIsClicked] = useState()
    const [top, setTop] = useState()
    const [left, setLeft] = useState()

    // useEffect(() => {
    //   if (elem.current) {
    //     const rect = elem.current.getBoundingClientRect();
    //     setTop(rect.top)
    //     setLeft(rect.left)
    //     // You can now use rect to position other elements or for any other purpose
    //     console.log(rect.top)
    //   }
    // }, [isClicked]);

    const nav = useNavigate();


    function handleClick(ev) {
      ev.preventDefault()
        const id = parseInt(ev.target.id);
        const rect = ev.target.getBoundingClientRect();
        setIsClicked(id)
        setTop(rect.top)
        setLeft(rect.left)
        setTimeout(() => {
          nav("/relationships/Zan")}, 
          4000)
    }
    
    function renderList() {
        return array.map((chara, i) => {
            return <div onClick={handleClick} className={`charabox ${isClicked === chara.id ? "clickedChara" : ""}`} id={chara.id} key={i}><p>{chara.name}</p></div>
            })
    }

  return (
    <>
    <style>
      {`
        .clickedChara {
          z-index: 1;
          top: ${top}px;
          left: ${left}px;
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
            top: 50px;
            left: 40px;
          }
        
        `
      }
    </style>
    <div>
      <div className="ref"></div>
      <div className="div">
      <div className={`blank ${isClicked ? "blank-top" : false}`}></div>
          {renderList()}
          
      </div>
      
    </div>
    </>
  )
}

export default List