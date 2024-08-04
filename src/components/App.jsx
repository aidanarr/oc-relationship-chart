import "../styles/App.scss"
import "../styles/Relationships.scss"
import data from "../services/data.json"
import Xarrow from "react-xarrows";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Relationships from "./Relationships";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Credits from "./Credits";
import ScrollToTop from "./ScrollToTop";


function App() {

const [clicked, setClicked] = useState(false)
const [top, setTop] = useState()
const [left, setLeft] = useState()
const [currentTop, setCurrentTop] = useState()
const [currentLeft, setCurrentLeft] = useState()

// home/credits coordinates
function setCoordinates(paramtop, paramleft) {
  setTop(paramtop)
  setLeft(paramleft)
}

// relationships coordinates
function setCurrentCoordinates(paramtop, paramleft) {
  setCurrentTop(paramtop)
  setCurrentLeft(paramleft)
}

// get data using chara name
const getCharaData = (name) => {

  const clickedChara = data.find((chara) => chara.name === name);
  return clickedChara
}

// navigate to relationships detail
const nav = useNavigate();

const handleClick = (ev, chara) => {
  setClicked(!clicked)
  setTimeout(() => {
    nav("/relationships/" + chara)}, 
    700)
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

function renderBorderColor(status) {
  if (status.includes("romantic interest")) {
    return "romance"
  } else if (status.includes("partner")) {
    return "romance"
  } else if (status.includes("friend")) {
    return "friend"
  } else if (status.includes("family")) {
    return "family"
  } else if (status.includes("rival")) {
    return "rival"
  } else return "misc"
}

const renderRelationships = (character) => {

  const relationships = character.relationships;

  return relationships.map((chara, i) => {
    return (
    <div key={i}>
      <div onClick={(ev) => handleClick(ev, chara.name)} className="related-charas">
        <div  id={chara.name} className={`tree__chara border-${renderBorderColor(chara.status)}`} style={{  
        backgroundImage: `url(/oc-relationship-chart/assets/${chara.name.toLowerCase()}.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
          <div className="status hidden">
            <p>{chara.name}</p>
            <p style={{color: `${renderColors(chara.status)}`}}>{chara.status}</p>
          </div>
        </div>
      </div> 
    </div>
    )
  })
}

function renderCharacters(creator) {

  const characters = data.filter((chara) => chara.creator.includes(creator));

  return characters.map((chara, i) => {
      return <div key={i} className="credits-chara">
          <div style={{  
          backgroundImage: `url(/oc-relationship-chart/assets/${chara.img}.png)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
          }} onClick={(ev) => handleClick(ev, chara.name)} className={`charabox`} id={chara.id} ></div>

          <div className={`charasheet hidden`}>
            <div>
              <p className="charaname">{chara.name} {chara.surname}</p>
              <p>{chara.pronouns}</p>
              <p>Age: {chara.age}</p>
              <p>Owner: {chara.creator}</p>
              <p>&quot;{chara.desc}&quot;</p>
            </div>
          </div>
         </div>
          
      })
}


  return (
    <div className="page">
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" 
            element={<Home 
            currentTop={currentTop} 
            currentLeft={currentLeft} 
            setCoordinates={setCoordinates} 
            data={data} />}/>
          <Route path="/relationships/:name" 
            element={<Relationships 
            setCurrentCoordinates={setCurrentCoordinates} top={top} 
            left={left} 
            clicked={clicked} 
            getCharaData={getCharaData} renderRelationships={renderRelationships} renderArrows={renderArrows}  />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/credits"  
            element={<Credits
            renderCharacters={renderCharacters} />} />
        </Routes>
        <Footer />

    </div>
  )
}

export default App
