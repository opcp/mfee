/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import '../../Reviews.css'

//---------------------------------------------------------------------------------------------------------

//主要內容外框
const Main = styled.section`
  margin: 0 auto;
  width: 1200px;
`

// 書本外框
const Book = styled.div`
  display: flex;
  margin: 5px 0;
  justify-content: center;
  height: 300px;
`
//直排
const BookColumn = styled.div`
  display: flex;
  flex-direction: column;
`

//書本圖片
const BookImage = styled.img`
  margin: 0 auto;
`
//加入書櫃按鈕
const BookCase = styled.button`
  margin: 0 auto;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: #cde2d0;
  color: #2d3a3a;
  border: 1px solid #ccc;
`
//書本資訊
const BookInfo = styled.div`
  width: 700px;
`
//書本星數
const BookStar = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  justify-content: center;
`
//回復評論外框
const Review = styled.section`
  width: 1200px;
  height: 350px;
  margin: 3rem auto;
  border-bottom: 1px solid #ccc;
`
//會員頭像
const Member = styled.img`
  width: 100px;
  height: 100px;
`
const Text = styled.div`
  position: relative;
  top: -100px;
  left: 150px;
  width: 1000px;
  height: 200px;
  border: 1px solid #ccc;
`
const Submit = styled.button`
  position: relative;
  top: -70px;
  left: 1050px;
  width: 100px;
  height: 50px;
`

//------------------------------------------------------------------------------------------------------

const List = () => {
  //從nodejs拿取資料的sid值
  const urlParams = window.location.pathname.replace('/list/', '')

  //變數
  const [List, setList] = useState([])

  useEffect(() => {
    reviewList()
  }, [])

  //書評分頁資料ajax
  const reviewList = () => {
    axios
      .get(`http://localhost:5555/list/${urlParams}`)
      .then(res => {
        console.log(res.data)
        setList(res.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <Main>
        {List.map((data, index) => (
          <Book key={index}>
            <BookColumn>
              <img
                className="list_img"
                key={data.sid}
                src={require('./images/' + data.pic)}
              />
              <BookCase>加入書櫃</BookCase>
              <BookCase>立即購買</BookCase>
            </BookColumn>
            <BookColumn>
              <BookInfo>
                <h4>{data.name}</h4>
                {'作者:'}
                {data.author}
                <br />
                <br />
                <br />
                {'內容簡介:'}
                <div>
                  {data.introduction
                    .replace(/<[^>]*>/g, '')
                    .replace(/&nbsp;/g, '')
                    .replace(/&hellip;/g, '')
                    .replace(/&bull;/g, '')}
                </div>
              </BookInfo>
            </BookColumn>
            <BookStar />
          </Book>
        ))}
        <Review>
          <h3>發表評論</h3>
          <Member />
          <Text />
          <Submit>送出評論</Submit>
        </Review>
        <Review>
          <Member />
          <Text />
        </Review>
      </Main>
    </>
  )
}

export default List
