import datacopy from "../services/data-copy.json"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

const List = () => {

    const elem = useRef(null)

    const [array, setArray] = useState(datacopy)
    const [isClicked, setIsClicked] = useState()

    useEffect(() => {
      if (elem.current) {
        const rect = elem.current.getBoundingClientRect();
        // You can now use rect to position other elements or for any other purpose
        console.log(rect.width)
      }
    }, []);

    function handleClick(ev) {
        const id = parseInt(ev.target.id);
        setIsClicked(id)
        setArray(array)
    }
    
    function renderList() {
        return array.map((chara, i) => {
            return <div ref={isClicked === chara.id ? elem : null} onClick={handleClick} className={`charabox ${isClicked === chara.id ? "clickedChara" : ""}`} id={chara.id} key={i}><p>{chara.name}</p></div>
            })
    }

  return (
    <>
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