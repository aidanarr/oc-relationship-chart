import "../styles/App.scss"
import data from "../services/data.json"
import Xarrow from "react-xarrows";
import Relationships from "./Relationships";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import List from "./List";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";




function App() {

useEffect(() => {
  console.log(data[0].relationships)
}, [])

const [clicked, setClicked] = useState(false)

const mainChara = data[0].name

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

const renderRelationships2 = () => {

  const relationships = data[0].relationships;

  return relationships.map((chara, i) => {
    return (
    <Link key={i} to={`/relationships/${chara.name}`}>
      <div  id={chara.name} className="box__div">
      <p>{chara.name}</p>
    </div>
    </Link>
    )
  })
}

const renderColors = (status) => {
  if (status === "romantic interest") {
    return "red"
  } else if (status === "best friend") {
    return "blue"
  } else return "green"
}

const renderArrows = () => {

  return data[0].relationships.map((chara, i) => {
    return <Xarrow key={i}
          start={mainChara}
          startAnchor="bottom"
          endAnchor="top"
          end={chara.name}
          color={renderColors(chara.status)}
          strokeWidth={2}
          showHead={false}
        />
  })
}

const renderArrows2 = (character) => {
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
        />
  })
}

const renderRelationships = (character) => {

  const relationships = character.relationships;

  return relationships.map((chara, i) => {
    return (
    <div key={i}>
    <div onClick={(ev) => handleClick(ev, chara.name)} className="related-charas"  >
      <div  id={chara.name} className="box__div">
      <p>{chara.name}</p>
    </div>
    </div>
    <div className="legend hidden">
      <p>{chara.status}</p>
    </div>
    </div>
    )
  })
}


  return (
    <div className="page">
      
        <Header />
        <Routes>
        <Route path="/" element={<Home data={data} />}/>
          <Route path="/relationships/:name" element={<Relationships clicked={clicked} getCharaData={getCharaData} renderRelationships={renderRelationships} renderArrows2={renderArrows2}  />}/>
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />

    </div>
  )
}

export default App
