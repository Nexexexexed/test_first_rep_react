import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import logo from './logo.svg'

const Header = () => {
  return (
    <div>   
        <Navbar >
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="30"
                        className='d-inline align-top'
                        alt='Logo'

                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
