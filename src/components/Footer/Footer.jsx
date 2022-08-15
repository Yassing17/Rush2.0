import React from 'react'
import './FooterStyles.css'
import logo from '../../assets/pictures/logo.png'


const Footer = () => {
    return (
      <div className='footer'>
        <img className='image' src={logo} />
      </div>
    )
}

export default Footer
