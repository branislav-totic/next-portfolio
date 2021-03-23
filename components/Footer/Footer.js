import React from 'react'
import { Container, Logo } from './Footer.css'

const Footer = () => {
  return (
    <Container>
      <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Logo src="/vercel.svg" alt="Vercel Logo" />
        </a>
    </Container>
  )
}

export default Footer
