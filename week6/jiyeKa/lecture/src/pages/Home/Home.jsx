import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"
import styled from "styled-components"

const StyledDiv = styled.div`
    background-color: ${(props)=>props.$bgcolor};
`


const Home = () => {
  return (
    <div>
        Home
        <h1 className={styles.h1}>homehome</h1>
        <Link to="/page">page로 가는 Link입니다</Link>
        <StyledDiv $bgcolor={"skyblue"}>설명설명</StyledDiv>
    </div>
  )
}

export default Home