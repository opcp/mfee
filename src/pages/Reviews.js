import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../Reviews.css'

// ------------------------------------------------------------------------------------
//主要內容外框
const Main = styled.section`
  margin: 0 auto;
  width: 1200px;
`
//類別欄外框
const CategoryBar = styled.div`
  display: flex;
  flex-wrap: wrap;
`
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
  flex-grow: 1;
`
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
  width: 500px;
  margin: 0 0 40px 40px;
  ${'' /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical; */}
`
//書本星數
const BookStar = styled.div`
  width: 350px;
  height: 250px;
  border: 1px solid #ccc;
`
// ------------------------------------------------------------------------------------

const Reviewer = () => {
  const [category, setCategory] = useState([])
  const [bookinfo, setbookinfo] = useState([])

  useEffect(() => {
    categoryBar()
    bookInfo()
  }, [])

  const categoryBar = () => {
    axios
      .post('http://localhost:4000/categoryBar')
      .then(res => {
        setCategory(res.data.data)
        console.log(res.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const bookInfo = () => {
    axios
      .get('http://localhost:4000/bookInfo')
      .then(res => {
        setbookinfo(res.data.rows)
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
  // category.filter()

  return (
    <>
      <Router>
        <Main>
          <CategoryBar>
            {category.map(data => (
              <button key={data.sid} className="btn">
                {data.name}
              </button>
            ))}
          </CategoryBar>
          <OptionBar>
            <select name="array">
              <option value="1">討論度(高>低)</option>
              <option value="2">上市日期(新>舊)</option>
              <option value="2">暢銷度</option>
            </select>
          </OptionBar>
          <Book>
            <BookColumn>
              {bookinfo.map(data => (
                <BookImage>
                  <img className='img' src={require('./BookReview/images/' + data.pic)}></img>
                </BookImage>
              ))}
            </BookColumn>
            <BookColumn>
              {bookinfo.map(data => (
                <BookInfo key={data.sid}>
                  <h3> {data.name}</h3>
                  {'作者:'}
                  <div>{data.author}</div>
                  <br />
                  <br />
                  {'內容簡介:'}
                  {/* <div>
                  {(data.detailData).replace(/<[^>]*>/, '')}
                </div> */}
                </BookInfo>
              ))}
            </BookColumn>
            {/* <BookStar /> */}
          </Book>
          <ul className="pagination">
            <li className="paginationNum">1</li>
          </ul>
        </Main>
      </Router>
    </>
  )
}

export default Reviewer
