import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import './Reviews.css'

function Category() {
  const [categorys, setCategorys] = useState([]) //分類資料
  const urlParams = window.location.pathname.replace('/reviews/', '')

  useEffect(() => {
    categoryBar()
  }, [])

  const CategoryBar = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  //---------------------------------------------------------------------------------------------
  const categoryBar = () => {
    axios
      .post('http://localhost:5555/categoryBar')
      .then(res => {
        let data = res.data.data
        setCategorys(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  //---------------------------------------------------------------------------------------------
  const goPage = s => {
    let category = s
    window.location.href = `http://localhost:3000/reviews/${category}`
  }
  return (
    <>
      <CategoryBar>
        {categorys.map((data, index) => (
          <button
            value={data.sid}
            onClick={s => {
              goPage(s.target.value)
            }}
            key={index}
            className="btn"
          >
            {data.name}
          </button>
        ))}
      </CategoryBar>
    </>
  )
}

export default Category
