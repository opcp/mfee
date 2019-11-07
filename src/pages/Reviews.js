/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import './BookReview/Reviews.css'

import Category from './BookReview/Category'
import Bookinfo from './BookReview/Bookinfo'

// ------------------------------------------------------------------------------------
//主要內容外框
const Main = styled.section`
  margin: 0 auto;
  width: 1200px;
`

// ------------------------------------------------------------------------------------

const Reviewer = () => {
  const [pagination, setPagination] = useState([]) //分頁數
  let pagNum = [] //分頁

  //分頁陣列
  for (let i = 1; i <= pagination; i++) {
    pagNum.push(<li className="paginationNum">{i}</li>)
  }
  // category.filter()

  return (
    <>
      <Main>
        <Category />
        <Bookinfo />
        {/* <ul className="pagination">
            <button
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1)
                }
              }}
            >
              1
            </button>
            {pagNum}
            <button
              onClick={() => {
                page <= pagination
                  ? setPage(page + 1)
                  : setPage((page = pagination))
              }}
            >
              >
            </button>
          </ul> */}
      </Main>
    </>
  )
}

export default Reviewer
