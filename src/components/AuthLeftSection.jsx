import React from 'react'
import authLeft from '../assets/authLeft.jpg'

const AuthLeftSection = () => {
  return (
    <div className='authLeftMain'>
      <img src={authLeft} alt="Auth Left Section" className='authLeftImage' />
      <div className='authLeftContent'>
        <p className='companyName'>OSA HR Solutions</p>
        <div className='authLeftBottom'>
          <p className='authLeftTitle'>“Designed and developed by Yokeshs TS to demonstrate modern React patterns, smooth user interactions, and clean code structure.”</p>
          <p className='authLeftSubtitle'>YOKESHS TS</p>
        </div>
      </div>
    </div>
  )
}

export default AuthLeftSection