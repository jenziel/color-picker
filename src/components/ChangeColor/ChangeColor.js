import React, {useState} from 'react'
import {useDispatch }from "react-redux";
import {changeColor} from '../../features/theme'
import './ChangeColor.css'
// there are some states you want to handle locally and some you want to handle
// globally
// you will still use useState in a Redux application when appropriate
function ChangeColor() {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
  return (
    <div className="instructions">
      <p className='color-directions'>type in a color using a descriptive name shown below:</p>
    <div className="change-color">
        <input className='color-input' type="text" onChange={(event) => {setColor(event.target.value)}}>
            {/* here we're assigning the state to be equal to whatever you wrote in this input */}
        </input>
      <button className='form-btn' onClick={() => {
        dispatch(changeColor(color))
      }}>pick a color</button>
    </div>
    </div>
  )
}

export default ChangeColor
