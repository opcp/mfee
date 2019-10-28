import React from 'react'
import styled from '@emotion/styled'
import '../Reviews.css'

const CategoryBar = styled.div`
    display:flex;
    justify-content:center;
`

// 書本外框
const Book = styled.section`
  display:flex;
  border-bottom:2px solid #ccc;
  margin: 5px 2rem;
  height: 300px;
  align-items: center;
  justify-content:space-between;
  flex-grow:1;
`
//書本圖片
const BookImage = styled.img`
    padding:0 0 0 30px;
    width:250px;
    height:250px;
`
//書本資訊
const BookInfo = styled.img`
    width:800px;
    height:250px;
`
//書本星數
const BookStar = styled.img`
    width:400px;
    height:250px;
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
            </CategoryBar>
            <CategoryBar>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
                <button className="btn">文學小說</button>
            </CategoryBar>
            <Book>
                <BookImage/>
                <BookInfo/>
                <BookStar/>
            </Book>
            <Book>
                <BookImage/>
                <BookInfo/>
                <BookStar/>
            </Book>
        </>
    )
}

export default Reviewer