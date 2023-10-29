import React from "react";
import './Cards.css'

function Cards({color, id}) {
    const darkcolors = ["darkred", "indigo","black", "rebeccapurple", "darkmagenta", "purple", "darkslateblue", "darkgreen", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "maroon", "darkslategray" ]
    if (darkcolors.includes(color) ) {
        return (<button className='card' id={id} style={{background: color, color: "lightgray"}}>{color}</button>);
    }
  return (
      <button className='card' id={id} style={{background: color}}>{color}</button>
  )
}

export default Cards;
