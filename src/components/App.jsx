import { useEffect, useState } from 'react'
import '../styles/App.css'
import Card from './Card'
import urlIdObj from "../data/data.js"
function App() {
  const [curScore, setCurScore] = useState(0);
  const [bestScore,setBestScore]=useState(0);
  const [clickedArr,setClickedArr]= useState([]);
  const [randArr,setRandArr] = useState([]);
  const [renderArr,setRenderArr] = useState(reArrange());
  


  function getRandomNum(){
    return Math.floor(Math.random()*12) // num from 0 to 11

  }
  function reArrange(){
    let num = getRandomNum();
    let arr =[];
    while(arr.length != 12){
       arr.includes(num) ? num =getRandomNum() : arr.push(num)
    }
    return arr

  }

  function handleClick(objId){
     setRenderArr(reArrange());
     console.log(renderArr);
       if (clickedArr.includes(objId)) {
      bestScore<curScore && setBestScore(curScore);
      console.log(`${clickedArr} best score arr`);
      setCurScore(0);
      setClickedArr([])
    } else{
      console.log(objId)
      console.log(clickedArr);
      setClickedArr([...clickedArr,objId])
      setCurScore(curScore+1)
    }
    
  }
  /*
  function renderCard(index){
    return <Card url={ urlIdObj[index]} onClick={ ()=>{
      handleClick(urlIdObj[index]),
      setRenderArr(reArrange())
    
    }}></Card>
  }
  function makeCards(indexes){
   let storage=[];
   for (let i = 0; i < indexes.length; i++) {
     storage.push(renderCard(indexes[i]));
   }
   return storage
  }
  function renderinCards(storage){
    setRandArr(storage);
  }
  /*
  function renderCards(){
   let indexes= reArrange();
   let storage=[];
   for (let i = 0; i < indexes.length; i++) {
     storage.push(renderCard(indexes[i]));
   }
   return (
    <>
    {...storage}
    </>
   )
  }*/
  return (                                
    <>
    <h1> Current score{curScore}</h1>
    <h2>Best score {bestScore}</h2>
    <div className="loading">

      {
      renderArr.map((index)=>{
        return <Card url={ urlIdObj[index]} key={urlIdObj[index]} onClick={ ()=>{
          handleClick(urlIdObj[index])
         
        
        }}></Card>
      })
      
      }
    </div>
    </>
  )
}

export default App
