import styled from 'styled-components'
import FooterBack from '../../images/footerBackground.png'
import FooterMobBack from '../../images/mobileFooter.png'

export const FooterStyled = styled.footer`
  margin-top: 247px;
  margin: 0 auto;
  background-image: url(${FooterBack});
  background-repeat: no-repeat;
  height: 443px;
  width: 1471px;
  @media ((min-width: 320px) and (max-width: 767px)) {
    margin-right: 120px;
    height: 120px;
    background-size: contain;
    background-image: url(${FooterMobBack});
    max-width: 720px;
    min-width: 300px;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
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

    @media (max-width: 768px) {
      font-size: 25px;
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
    margin-right: 50px;

    @media ((min-width: 320px) and (max-width: 767px)) {
      padding-top: 0;
      max-width: 300px;
      display: flex;
      max-width: 200px;
      margin-right: 150px;
    }
    @media (min-width: 768px) {
      margin-top: 70px;
      margin-right: 100px;
      padding: 0;
    }
    li {
      margin-left: 20px;
      margin-top: 160px;

      @media (max-width: 768px) {
        margin-top: 55px;
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
      @media (max-width: 768px) {
        font-size: 24px;
        margin-top: 0;
      }
      a {
        text-decoration: none;
        margin-right: 5px;
        font-size: 28px;

        @media (max-width: 768px) {
          font-size: 24px;
          margin-top: 0;
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
