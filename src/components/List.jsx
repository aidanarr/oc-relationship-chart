import datacopy from "../services/data-copy.json"
import { useState } from "react"

const List = () => {

    const [array, setArray] = useState(datacopy)
    const [isClicked, setIsClicked] = useState()

    function handleClick(ev) {
        const id = parseInt(ev.target.id);
        setIsClicked(id)
        setArray(array)
    }
    
    function renderList() {
        return array.map((chara, i) => {
            return <div onClick={handleClick} className={`charabox ${isClicked === chara.id ? "clickedChara" : ""}`} id={chara.id} key={i}><p>{chara.name}</p></div>
            })
    }

  return (
    <div>
        {renderList()}
    </div>
  )
}

export default List