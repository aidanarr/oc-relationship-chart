import datacopy from "../services/data-copy.json"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

const List = () => {

    const elem = useRef(null)

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

    function handleClick(ev) {
        const id = parseInt(ev.target.id);
        const rect = ev.target.getBoundingClientRect();
        setIsClicked(id)
        setTop(rect.top)
        setLeft(rect.left)
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
          position: absolute;
          top: ${top}px;
          left: ${left}px;
          animation: 1s clicked 2s ease-in-out forwards;
         }
        
         @keyframes clicked {
          0% {
            top: ${top}px;
            left: ${left}px;
        
          }
        
          100% {
        
            top: 50px;
            left: 40px;
          }
        
        `
      }
    </style>
    <div>
      <div className="ref"></div>
      <div className="div">
          {renderList()}
      </div>
    </div>
    </>
  )
}

export default List