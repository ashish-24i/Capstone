import "./collection.css"

import Item from "./item";
import Selections from "./Selections";



function Collection(props) {
  return (
    <>
     <Selections  />
    <div className="listItem  absolute top-10" >
    {
        props.data.map((item) => <Item data={item} key={item.videoId}/>)
    }   

    </div>
    </>
  )
}



export default Collection;