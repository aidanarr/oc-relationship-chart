import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";

const Relationships = ({renderRelationships, renderArrows2, getCharaData, clicked}) => {

    const [playAnimation, setPlayAnimation] = useState(false)

    const {name} = useParams();

    const data = getCharaData(name);

    useEffect(() => {
      setPlayAnimation(false)
      setTimeout(() => {
        setPlayAnimation(true)
      }, 100)
    }, [clicked])

  return (
    <div className="box">
    <div className="box__div main-chara" id={data.name}>{data.name}</div>
    <div className={`legend hidden`}>
        <p>Age: {data.age}</p>
        <p>&quot;{data.desc}&quot;</p>
    </div>
    <div className={`children ${playAnimation ? "animation" : ""}`}>
    {renderRelationships(data)}
    </div>
    <div className={`arrows ${playAnimation ? "animation" : ""}`}>
    {renderArrows2(data)}
    </div>
    </div>
  )
}

export default Relationships