import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Collection from "./components/Collection"
import { useState,useRef, useEffect} from "react"



function App() {

 

  const [data, setData] = useState([])
  
  async function fet(){
    
    const data =await  fetch("http://localhost:3000/app/fetch") 

    const res = await data.json()

    setData(res)

  }

  useEffect(()=>{
    fet();
  },[])


  

  return (
    <>
    
     <Header />
      <Collection data={data}/>
     <Outlet />
    
     
      
      
    </>
  )
}

export default App
