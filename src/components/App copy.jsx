import "../styles/App.scss"
import data from "../services/data.json"
import Xarrow from "react-xarrows";
import Relationships from "./Relationships";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import List from "./List";




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

const handleClick = () => {
  setClicked(!clicked)
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
      <>
    <Link onClick={handleClick} className="related-charas" key={i} to={`/relationships/${chara.name}`}>
      <div  id={chara.name} className="box__div">
      <p>{chara.name}</p>
    </div>
    </Link>
    <div className="legend hidden">
      <p>{chara.status}</p>
    </div>
    </>
    )
  })
}


  return (
    <>
      

        <Routes>
        <Route path="/" element={
          <>
           <div className="box">
            <div className="box__div" id={mainChara}>{mainChara}</div>
            <div className="children">
              
              {/* <p id="elem2" className="box__div">hey2</p>
              <p id="elem3" className="box__div">hey3</p> */}
              {renderRelationships2()}
            </div>
            <div className="arrows">
            {renderArrows()}
            </div>
            {/* <Xarrow
                start="elem1" 
                startAnchor="bottom"
                endAnchor="top"
                end="elem2"
                color="red"
                strokeWidth={2}
            />
            <Xarrow
                start="elem1" 
                startAnchor="bottom"
                endAnchor="top"
                end="elem3"
            /> */}
        </div>
          </>
        }/>
          <Route path="/relationships/:name" element={<Relationships clicked={clicked} getCharaData={getCharaData} renderRelationships={renderRelationships} renderArrows2={renderArrows2}  />}/>
          <Route path="/list" element={<List />} />
        </Routes>

    </>
  )
}

export default App
