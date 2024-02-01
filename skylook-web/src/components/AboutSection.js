import React from 'react'
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container'

function AboutSection() {
  return (
   <>
     <Container> 
        <h1>Fluid jumbotron !</h1> 
        <p> 
           This is a modified fluid jumbotron which 
           stretches the whole horizontal space.     
        </p> 
        <Button variant="primary"> 
         Primary Button 
        </Button> 
      </Container> 
   </>
  )
}

export default AboutSection

