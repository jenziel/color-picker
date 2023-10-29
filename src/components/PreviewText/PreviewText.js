import React, {useState} from 'react'
import {useDispatch }from "react-redux";
import {changeSampleText} from '../../features/sample'
import './PreviewText.css'

function  PreviewText() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
  return (
    <div className="instructions">
        <p>custom preview:</p>
        <div className="change-text">
            <input placeholder="preview" className='preview-input' type="text" onChange={(event) => {setText(event.target.value)}}>
            </input>
          <button className='form-btn' onClick={() => {
            dispatch(changeSampleText(text))
          }}>submit</button>
        </div>
    </div>
      )
}

export default PreviewText