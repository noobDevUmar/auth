import React, { useContext, useEffect } from 'react'
import {UserContext} from './Context/UserContext'


const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div> not logged in </div>

  return (
    <div>Welcome {user?.username}</div>
  )
}

export default Profile