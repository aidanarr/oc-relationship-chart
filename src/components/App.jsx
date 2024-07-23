import "../styles/App.scss"
import "../styles/Relationships.scss"
import data from "../services/data.json"
import Xarrow from "react-xarrows";
import Relationships from "./Relationships";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import List from "./List";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";


function App() {

useEffect(() => {
  console.log(data[0].relationships)
}, [])

const [clicked, setClicked] = useState(false)
const [top, setTop] = useState()
const [left, setLeft] = useState()
const [currentTop, setCurrentTop] = useState()
const [currentLeft, setCurrentLeft] = useState()

function setCoordinates(paramtop, paramleft) {
  setTop(paramtop)
  setLeft(paramleft)
}

function setCurrentCoordinates(paramtop, paramleft) {
  setCurrentTop(paramtop)
  setCurrentLeft(paramleft)
}

const getCharaData = (name) => {

  const clickedChara = data.find((chara) => chara.name === name);

  return clickedChara
}

const nav = useNavigate();

const handleClick = (ev, chara) => {
  setClicked(!clicked)
  setTimeout(() => {
    nav("/relationships/" + chara)}, 
    100)
}

const renderColors = (status) => {
  if (status.includes("romantic interest")) {
    return "#D45F9E"
  } else if (status.includes("partner")) {
    return "#D45F9E"
  } else if (status.includes("friend")) {
    return "#1c89b8"
  } else if (status.includes("family")) {
    return "#ff993f"
  } else if (status.includes("rival")) {
    return "#8d2133"
  } else return "gray"
}

const renderArrows = (character) => {
  const mainCharacter = character.name;
  const relationships = character.relationships

  return relationships.map((chara, i) => {
    return <Xarrow key={i}
          start={mainCharacter}
          startAnchor="bottom"
          endAnchor="top"
          end={chara.name}
          color={renderColors(chara.status)}
          strokeWidth={2}
          showHead={false}
          zIndex={0}
        />
  })
}

const renderRelationships = (character) => {

  const relationships = character.relationships;

  return relationships.map((chara, i) => {
    return (
    <div key={i}>
      <div onClick={(ev) => handleClick(ev, chara.name)} className="related-charas">
        <div  id={chara.name} className="tree__chara">
          <p>{chara.name}</p>
        </div>
      </div>
      <div className="status hidden">
        <p style={{color: `${renderColors(chara.status)}` }}>{chara.status}</p>
      </div>
    </div>
    )
  })
}


  return (
    <div className="page">
      
        <Header />
        <Routes>
        <Route path="/" currentTop={currentTop} currentLeft={currentLeft} element={<Home setCoordinates={setCoordinates} data={data} />}/>
          <Route path="/relationships/:name" element={<Relationships setCurrentCoordinates={setCurrentCoordinates} top={top} left={left} clicked={clicked} getCharaData={getCharaData} renderRelationships={renderRelationships} renderArrows={renderArrows}  />}/>
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />

    </div>
  )
}

export default App
