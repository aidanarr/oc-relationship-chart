import { useParams } from "react-router-dom"
import { useEffect } from "react";

const Relationships = ({renderRelationships, renderArrows2, getCharaData}) => {



    const {name} = useParams();

    const data = getCharaData(name);

    useEffect(() => {
        console.log(data)
    }, [])

  return (
    <div className="box">
    <div className="box__div main-chara" id={data.name}>{data.name}</div>
    <div className={`legend hidden`}>
        <p>Age: {data.age}</p>
        <p>&quot;{data.desc}&quot;</p>
    </div>
    <div className="children">
    {renderRelationships(data)}
    </div>
    {renderArrows2(data)}
    
    </div>
  )
}

export default Relationships