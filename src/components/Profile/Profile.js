import React from 'react'
import {useSelector} from 'react-redux'
import './Profile.css'
import ChangeColor from '../ChangeColor/ChangeColor';

function Profile() {
const user = useSelector((state) => state.user.value)
const sample = useSelector((state) => state.sample.value)
const theme = useSelector((state) => state.theme.value)
// useSelector is how we access the store
  return (

    <div className="profile-container" style={{color: theme}}>
      <p>{sample}</p>
      {/* <p>Age: {user.age}</p>
      <p>Email: {user.email}</p> */}

    </div>
  )
}

export default Profile
