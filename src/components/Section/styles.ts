import styled from 'styled-components'
import Texture from '../../images/texture.png'

export const SectionStyled = styled.section`
  margin-top: 128px;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  @media ((min-width: 320px) and (max-width: 767px)) {
    margin-top: 20px;
  }
  .project-list {
    width: 95%;
    margin-left: 5%;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 30px;
    color: white;
    font-weight: 100;
    letter-spacing: 10%;

    @media ((min-width: 320px) and (max-width: 767px)) {
      font-size: 20px;
    }
    span {
      margin-right: 38px;

      @media ((min-width: 320px) and (max-width: 767px)) {
        margin-right: 8px;
        img {
          width: 10px;
        }
      }
    }
  }
`
export const SectContainer = styled.div`
  p {
    color: white;
    margin-left: 63px;
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    width: 854px;

    @media (max-width: 768px) {
      width: 650px;
    }

    @media ((min-width: 320px) and (max-width: 767px)) {
      font-size: 14px;
      width: 300px;
      margin: 10px;
    }
  }
  margin-bottom: 129px;
`
export const ProjectList = styled.ul`
  width: 100%;
  margin: 0 auto;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    min-width: 600px;
    margin-left: 0;
    padding: 0;
  }
  @media ((min-width: 320px) and (max-width: 767px)) {
    grid-template-columns: 1fr;
    max-width: 200px;
  }
`
export const ProjectCard = styled.li`
  max-width: 475px;
  background-image: url(${Texture});
  background-size: cover;
  border: 1px solid;
  border-color: white;
  border-bottom-right-radius: 32px;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  margin-top: 64px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 320px;
  }

  @media ((min-width: 320px) and (max-width: 767px)) {
    max-width: 285px;
  }

  .overlay {
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#d9d9d9, #2d2d2d);
    opacity: 15%;
    border-bottom-right-radius: 32px;
    border-bottom-left-radius: 32px;
  }

  img {
    max-width: 474px;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;

    @media (max-width: 768px) {
      max-width: 320px;
    }

    @media ((min-width: 320px) and (max-width: 767px)) {
      max-width: 285px;
    }
  }

  h3 {
    text-align: left;
    font-size: 24px;
    margin-left: 32px;

    @media ((min-width: 320px) and (max-width: 767px)) {
      font-size: 20px;
      margin-left: 20px;
    }
  }
  a {
    text-decoration: none;
    color: #dbf6ff;
  }
  p {
    text-align: left;
    max-width: 411px;
    margin-left: 32px;
    color: white;

    @media ((min-width: 320px) and (max-width: 767px)) {
      font-size: 20px;
      margin-left: 20px;
    }

    @media (max-width: 768px) {
      max-width: 260px;
      font-size: 19px;
    }
  }
`
