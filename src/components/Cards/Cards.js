import React, {useEffect, useState} from "react";
import './Cards.css'
import {useDispatch }from "react-redux";
import {changeColor} from '../../features/theme'

function Cards({color, id}) {
    const [color1, setColor1] = useState("");
    const dispatch = useDispatch();
    const darkcolors = ["darkred", "indigo","black", "rebeccapurple", "darkmagenta", "purple", "darkslateblue", "darkgreen", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "maroon", "darkslategray" ]

    const handleButtonClick = (selectedColor) => {
        setColor1(selectedColor); 
        dispatch(changeColor(selectedColor)); 
    };
    if (darkcolors.includes(color) ) {
        return (<button  onClick={() => handleButtonClick(color)} className='card' id={id} style={{background: color, color: "lightgray"}}>{color}</button>);
    }
  return (
      <button 
      onClick={() => handleButtonClick(color)}
        className='card' id={id} style={{background: color}}>{color}</button>
  )
}

export default Cards;

// onChange={(event) => {setColor(event.target.value)}
// onClick={() => {
//     dispatch(changeColor(color))
// }}