import React from "react";
import './Cards.css'

function Cards({color, id}) {
    const darkcolors = ["darkred", "indigo","black", "rebeccapurple", "darkmagenta", "purple", "darkslateblue", "darkgreen", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "maroon", "darkslategray" ]
    if (darkcolors.includes(color) ) {
        return (<div className='card' id={id} style={{background: color, color: "lightgray"}}>{color}</div>);
    }
  return (
      <div className='card' id={id} style={{background: color}}>{color}</div>
  )
}

export default Cards;
