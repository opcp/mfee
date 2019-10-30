import React from 'react'
import Header from '../../components/header/Header'
import styled from '@emotion/styled'
import '../../Reviews.css'

//主頁面外框

// 書本外框
const Book = styled.div`
  display: flex;
  margin: 5px 0;
  justify-content: center;
  height: 300px;
  align-items: center;
`
//書本圖片
const BookImage = styled.img`
  width: 250px;
  height: 250px;
`
//書本資訊
const BookInfo = styled.div`
  width: 800px;
  height: 250px;
  border: 1px solid #ccc;
`
//書本星數
const BookStar = styled.div`
  display: flex;
  width: 400px;
  height: 250px;
  border: 1px solid #ccc;
  justify-content: center;
`
//回復評論外框
const Review = styled.section`
  width: 1200px;
  height:350px;
  margin: 3rem auto;
  border-bottom:1px solid #ccc
`
//會員頭像
const Member = styled.img`
  width: 100px;
  height:100px;
`
const Text = styled.div`
  position:relative;
  top:-100px;
  left:150px;
  width:1000px;
  height:200px;
  border:1px solid #ccc;
`
const Submit = styled.button`
  position:relative;
  top:-70px;
  left:1050px;
  width:100px;
  height:50px;
`

const List = () => {
  return (
    <>
      <Book>
        <BookImage />
        <BookInfo />
        <BookStar />
      </Book>
      <Review>
        <h3>發表評論</h3>
        <Member/>
        <Text/>
        <Submit>送出評論</Submit>
      </Review>
      <Review>
        <Member/>
        <Text/>
      </Review>
    </>
  )
}

export default List
