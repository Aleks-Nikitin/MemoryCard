import { get } from "http";
import { useEffect, useState } from "react";
import "../styles/Card.css";
export default function Card({url,onClick}){
    const [wowObj,setWowObj]=useState("");
    const urlKey = url;
    const fetchUrl = `https://api.giphy.com/v1/gifs/${urlKey}?api_key=hiwceFnwYRL9041M3QiLIACGRJccvlNO&rating=g`
/*
    async function loadJson(url) {
        let result = await fetch(url)

        if (result.status == 200) {
            let json = await result.json();
            return json
        } else {
            throw new Error(result.status);
        }
        
    }
    async function getData(uri) {
  try {
    const response = await fetch(uri);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}*/

useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => setWowObj(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

    return (
        <div className="block" key={url}>
            {
        wowObj!="" &&<img src={wowObj.data.images.original.url} alt="warlock" onClick={onClick} />}
        <p>
            {
            wowObj!=""&& wowObj.data.title
            }
        </p>


        </div>
    )
}