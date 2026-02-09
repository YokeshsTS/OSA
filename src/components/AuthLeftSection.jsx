import React from 'react'
import authLeft from '../assets/authLeft.jpg'

const AuthLeftSection = () => {
  return (
    <div className='authLeftMain'>
      <img src={authLeft} alt="Auth Left Section" className='authLeftImage' />
      <div className='authLeftContent'>
        <p>OSA HR Solutions</p>
        <div className='authLeftBottom'>
          <p>“This platform has completely transformed how we manage our properties. The insights and automation are unmatched.”</p>
          <p>YOKESHS TS</p>
        </div>
      </div>
    </div>
  )
}

export default AuthLeftSection