import React from 'react'
import styled from "styled-components"
import statusBarDesgin from "../../assets/StatusBarDesign.svg"
import LeftChevron from "../../assets/LeftChevron.svg"
import { Link } from 'react-router-dom'

const SytledDiv = styled.div`
    display: flex;
    width: 390px;
    
    justify-content: center;
    align-items: center;
`

const Top = styled.div`
  display: flex;
  width: 390px;
  padding-bottom: 41px;
  justify-content: center;
  align-items: center;
`
const Under = styled.div`
  display: flex;
  width: 380px;
  position: absolute;
  top: 47px;
  left: 10px;
  justify-content: space-between;
  align-items: center;
`


const StatusBar = ({back, cancel, link}) => {
  return (
    <Top>
      <SytledDiv>
        <img src={statusBarDesgin} alt="상태창" />
      </SytledDiv>
      <Under>
        <Link to={`${link}`}>
        {back && <img src={LeftChevron} alt="뒤로 가기" />}
        </Link>
      {cancel && <p style={{
        color: "#333D4B",
        fontFamily:"Pretendard",
        fontSize:"14px",
        fontWeight:"600",
        margin:0
      }}>주문취소</p>}
      </Under>
    </Top>
  )
}

export default StatusBar