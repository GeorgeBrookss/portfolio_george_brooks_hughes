import styled from 'styled-components'
import FooterBack from '../../images/footerBackground.png'
import FooterMobBack from '../../images/mobileFooter.png'

export const FooterContaner = styled.div`
  max-width: 100%;
`

export const FooterStyled = styled.footer`
  margin-top: 247px;
  margin: 0 auto;
  background-image: url(${FooterBack});
  background-repeat: no-repeat;
  height: 443px;
  background-size: contain;
  background-position: center center;
  width: 100%;
  object-fit: cover;
  @media ((min-width: 320px) and (max-width: 767px)) {
    height: 120px;
    background-size: contain;
    background-position: center center;
    background-image: url(${FooterMobBack});
    min-width: 100vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 750px;
    background-size: contain;
    background-image: url(${FooterBack});
    height: 250px;
  }

  h2 {
    color: white;
    margin-left: 74px;
    margin-top: 27px;
    padding-top: 27px;
    font-size: 40px;
    font-weight: 250;

    @media (min-width: 768px) {
      font-size: 25px;
      margin-left: 220px;
      height: fit-content;
    }

    @media ((min-width: 320px) and (max-width: 767px)) {
      font-size: 10px;
      margin-left: 24px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-self: center;
    margin-right: 130px;
    padding-top: 200px;

    @media ((min-width: 320px) and (max-width: 767px)) {
      padding-top: 0;
      max-width: 300px;
      display: flex;
      max-width: 200px;
      margin-right: 150px;
    }
    @media (min-width: 768px) and (max-width: 800px) {
      margin-top: 70px;
      margin-right: 140px;
      padding: 0;
    }
    @media (min-width: 800px) and (max-width: 1024px) {
      margin-top: 70px;
      margin-right: 200px;
      padding: 0;
    }
    li {
      margin-left: 20px;
      margin-top: 162px;
      padding-top: 160px;

      @media (min-width: 320px) {
        padding-top: 50px;
        margin-left: 30px;
        margin-top: 0;
      }

      @media (min-width: 768px) and (max-width: 799px) {
        margin-top: 55px;
        font-size: 24px;
        margin-top: 90px;
      }
      @media (min-width: 800px) and (max-width: 1024px) {
        margin-top: 90px;
        margin-left: 55px;
      }

      .gradient {
        background: linear-gradient(to right, #ffffff, #b1b1b1ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .gradient2 {
        background: linear-gradient(to right, #9f9f9fff, #6e6e6eff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .gradient3 {
        background: linear-gradient(to right, #727272ff, #646464ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .gradient4 {
        background: linear-gradient(to right, #646464ff, #5e5e5eff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      a {
        text-decoration: none;
        margin-right: 5px;
        font-size: 48px;

        @media (min-width: 800px) and (max-width: 1024px) {
          margin-top: 55px;
          background-color: red;
          margin-top: 90px;
          font-size: 20px;
        }

        @media (min-width: 768px) and (max-width: 799px) {
          font-size: 24px;
          margin-top: 0;
          font-size: 24px;
        }

        @media ((min-width: 320px) and (max-width: 767px)) {
          font-size: 10px;
          margin: 0;
        }
      }
      span {
        font-size: 24px;
        margin-left: 20px;
        color: white;

        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`
