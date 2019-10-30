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
  flex-wrap:wrap;
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
const BookInfo = styled.div`
  width: 800px;
  height: 250px;
  border: 1px solid #ccc;
`
//書本星數
const BookStar = styled.div`
  width: 400px;
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
        axios.post('http://localhost:4000/bookInfo')
            .then(res => {
                setbookinfo(res.data.data)
                console.log(res.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Router>
                <Main>
                    <CategoryBar>
                        {category.map(data => (
                            <button className="btn">{data.name}</button>
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
                            <BookImage />
                            <BookInfo>{bookinfo.map(data => (
                                <div>{data.introduction}</div>
                            ))}</BookInfo>
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
                    <Route path="http://localhost:3000/list/" />
                </Switch>
            </Router>
        </>
    )
}

export default Reviewer
