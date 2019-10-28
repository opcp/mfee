import React from 'react'
import styled from '@emotion/styled'
import '../Reviews.css'

const InterBar = styled.nav`
    border:1px solid #000;
    height:30px;
    width:1920px;
    background: #aec;
`
const CategoryBar = styled.div`
    display:flex;
    justify-content:center;
    width:1920px;
`

const BookImage = styled.section`
  margin: 0 auto;
  width:1800px;
  height: 300px;
  background: #aec;
  border:1px solid #000
  
`

const Reviewer = () => {
    return (
        <>
            <CategoryBar>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
            </CategoryBar>
        </>
    )
}

export default Reviewer