import { get } from "http";
import { useEffect, useState } from "react";
import "../styles/Card.css";
export default function Card({url,onClick}){
    const [wowObj,setWowObj]=useState("");
    const urlKey = url;
    const fetchUrl = `https://api.giphy.com/v1/gifs/${urlKey}?api_key=VB3oLECOrK6unQUUPqJ4uO3nQS9OI2JM&rating=g`


useEffect(() => {
    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => setWowObj(data));
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