/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import styled from '@emotion/styled'
import axios from 'axios'

function Bookinfo() {
  const [bookinfo, setbookinfo] = useState([]) //書籍資料
  const [array, setArray] = useState() //排序方式
  const [Categorys, setCategorys] = useState()

  const urlParams = window.location.pathname.replace('/reviews/', '')

  console.log(array)
  console.log(urlParams)
  // setCategorys(urlParams)
  //---------------------------------------------------------------------------
  //右上排列方式欄位
  const OptionBar = styled.div`
    display: flex;
    flex-direction: row-reverse;
  `

  // 書本外框
  const Book = styled.section`
    display: flex;
    margin: 5px 0;
    align-items: center;
  `
  //直排
  const BookColumn = styled.div`
    display: flex;
    flex-direction: column;
  `

  //書本圖片
  const BookImage = styled.div`
    margin: 0 auto;
  `
  //書本資訊
  const BookInfo = styled.div`
    width: 850px;
    margin: 0 0 40px 2rem;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `
  //書本星數
  const BookStar = styled.div`
    width: 350px;
    height: 250px;
    border: 1px solid #ccc;
  `
  //---------------------------------------------------------------------
  useEffect(() => {
    bookInfo()
  }, [])

  const bookInfo = e => {
    setArray(e)
    axios
      .get(`http://localhost:5555/reviews/${urlParams}/${array}`)
      .then(res => {
        setbookinfo(res.data.rows)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <OptionBar>
        <select
          onChange={e => {
            bookInfo(e.target.value)
          }}
          value={array}
          name="array"
        >
          <option value="1" selected>
            討論度(高>低)
          </option>
          <option value="2">上市日期(新>舊)</option>
          <option value="3">暢銷度</option>
        </select>
      </OptionBar>
      <Book>
        <BookColumn>
          {bookinfo.map((data, index) => (
            <BookImage>
              <Link to={'/list/' + data.sid}>
                <img
                  key={index}
                  className="img"
                  src={require('./images/' + data.pic)}
                />
              </Link>
            </BookImage>
          ))}
        </BookColumn>
        <BookColumn>
          {bookinfo.map(data => (
            <BookInfo key={data.sid}>
              <Link className="list_sid" to={'/list/' + data.sid}>
                <h4> {data.name}</h4>
              </Link>
              {'作者:'}
              {data.author}
              {/* {'出版社:'}
                  {data.publish_date} */}
              <div />
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
          ))}
        </BookColumn>
        {/* <BookStar /> */}
      </Book>
    </>
  )
}

export default Bookinfo