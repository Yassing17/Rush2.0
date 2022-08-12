//website footer

import React from 'react'
import './FooterStyles.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logos from "../../assets/pictures/footer.png"
import MyFooter from "../../assets/pictures/footer2.png"

const Footer = () => {
    return (
      <div>
        <img src={MyFooter} alt='footer2.0'/>
      </div>
    )
}

export default Footer
