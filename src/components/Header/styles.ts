import styled from 'styled-components'
import Banner from '../../images/header.png'

export const HeaderStyled = styled.div`
  max-width: 1472px;
  margin: 0 auto;
  color: black;
  justify-content: center;
  margin-top: 64px;
  h1 {
    color: white;
    font-size: 40px;
    font-weight: 300;
    margin-bottom: 0;
    @media (max-width: 768px) {
      max-width: 650px;
      font-size: 28px;
      margin-left: 65px;
    }

    span {
      margin-left: 10px;
    }
  }
`
export const NavStyled = styled.nav`
  background-image: url(${Banner});
  height: 657px;
  width: 1472px;
  display: flex;
  background-repeat: no-repeat;
  @media ((min-width: 320px) and (max-width: 767px)) {
    width: 300px;
    max-height: 200px;
  }

  @media (max-width: 768px) {
    max-width: 650px;
    background-size: contain;
    margin: 0 auto;
    height: 375px;
  }
  ul {
    display: flex;
    margin-left: 74px;
    margin-top: 37px;
    list-style: none;
    @media (max-width: 768px) {
      max-width: 650px;
      margin-top: 250px;
      max-height: 120px;
    }
    @media ((min-width: 320px) and (max-width: 767px)) {
      width: 300px;
      margin-top: 150px;
      margin-left: 0;
    }

    li {
      margin-left: 20px;
      @media (max-width: 768px) {
        font-size: 18px;
        margin: 5px;
        height: 100px;
      }

      a {
        text-decoration: none;
        color: black;
        margin-right: 5px;
        font-size: 24px;
        @media (max-width: 768px) {
          font-size: 18px;
          margin: 0;
          color: whitesmoke;
        }
        @media ((min-width: 320px) and (max-width: 767px)) {
          font-size: 10px;
        }
      }
      span {
        font-size: 24px;
        margin-left: 20px;
        @media (max-width: 768px) {
          font-size: 18px;
          margin: 0;
          color: whitesmoke;
        }
        @media ((min-width: 320px) and (max-width: 767px)) {
          font-size: 10px;
        }
      }
    }
  }
`
