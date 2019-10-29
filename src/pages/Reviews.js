import React from 'react'
import styled from '@emotion/styled'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ReviewsList from './BookReview/ReviewsList'
import '../Reviews.css'

//主要內容外框
const Main = styled.section`
  margin: 0 auto;
  width: 1280px;
`
//類別欄外框
const CategoryBar = styled.div`
  display: flex;
  justify-content: center;
`
//右上排列方式欄位
const OptionBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

// 書本外框
const Book = styled.div`
  display: flex;
  margin: 5px 0;
  justify-content: center;
  height: 300px;
  align-items: center;
  flex-grow: 1;
`
//書本圖片
const BookImage = styled.img`
  width: 250px;
  height: 250px;
`
//書本資訊
const BookInfo = styled.img`
  width: 800px;
  height: 250px;
`
//書本星數
const BookStar = styled.img`
  width: 400px;
  height: 250px;
`
const Reviewer = () => {
  return (
    <>
      <Router>
        <Main>
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
          <OptionBar>
            <select name="array">
              <option value="1">討論度(高>低)</option>
              <option value="2">上市日期(新>舊)</option>
              <option value="2">暢銷度</option>
            </select>
          </OptionBar>
          <Link to="/List">
            <Book>
              <BookImage />
              <BookInfo />
              <BookStar />
            </Book>
          </Link>
          <Book>
            <BookImage />
            <BookInfo />
            <BookStar />
          </Book>
          <Book>
            <BookImage />
            <BookInfo />
            <BookStar />
          </Book>
          <Book>
            <BookImage />
            <BookInfo />
            <BookStar />
          </Book>
          <Book>
            <BookImage />
            <BookInfo />
            <BookStar />
          </Book>
          <ul className="pagination">
            <li className="paginationNum">1</li>
            <li className="paginationNum">2</li>
            <li className="paginationNum">3</li>
            <li className="paginationNum">4</li>
            <li className="paginationNum">5</li>
            <li className="paginationNum">6</li>
            <li className="paginationNum">7</li>
            <li className="paginationNum">8</li>
          </ul>
        </Main>

        <Switch>
          <Route exact path="/List" component={ReviewsList} />
        </Switch>
      </Router>
    </>
  )
}

export default Reviewer
