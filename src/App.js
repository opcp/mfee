  
import React from 'react'
import { Nav } from 'react-bootstrap'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`
const InterBar = styled.div`
  height: 30px;
  background: #aec;
`

function App() {
  return (
    <>
      <Container>
        <InterBar />
      </Container>
    </>
  )
}

export default App