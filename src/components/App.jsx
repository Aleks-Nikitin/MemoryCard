import { useState } from 'react'
import '../styles/App.css'
import Card from './Card'
import urlIdObj from "../data/data.js"

function App() {
  const [curScore, setCurScore] = useState(0);
  const [bestScore,setBestScore]=useState(0);
  const [clickedArr,setClickedArr]= useState([]);
  
  function handleClick(objId){
       if (clickedArr.includes(objId)) {
      setBestScore(curScore);
      setCurScore(0);
      setClickedArr([])
    } else{
      setClickedArr(...clickedArr,objId)
      setCurScore(curScore+1)
    }
  }
  return (
    <>
    <h1> Current score{curScore}</h1>
    <h2>Best score {bestScore}</h2>
    <Card url={urlIdObj.urlId1} onClick={ ()=>handleClick(urlIdObj.urlId1)}></Card>
    </>
  )
}

export default App
