import React from 'react'
import { Container, Logo } from './Footer.css'

const Footer = () => {
  return (
    <Container>
      <div><span>developed by: Branislav Totić</span></div>
      <div><span>@ {new Date().getFullYear()}</span></div>
    </Container>
  )
}

export default Footer
