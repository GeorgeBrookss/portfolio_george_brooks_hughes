import { HeaderStyled, NavStyled } from './styles'
const Header = () => {
  return (
    <>
      <HeaderStyled>
        <h1>
          D&nbsp;&nbsp;E&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;
          <span>
            F&nbsp;&nbsp;U&nbsp;&nbsp;L&nbsp;&nbsp;L&nbsp;&nbsp;S&nbsp;&nbsp;T&nbsp;&nbsp;A&nbsp;&nbsp;C&nbsp;&nbsp;K
          </span>
        </h1>

        <NavStyled>
          <ul>
            <li>
              <a href="#front-end">FRONT-END</a>
              <span>/</span>
            </li>
            <li>
              <a href="#back-end">BACK-END</a>
              <span>/</span>
            </li>
            <li>
              <a href="#mobile">MOBILE</a>
              <span>/</span>
            </li>
            <li>
              <a href="#contatos">CONTATO</a>
            </li>
          </ul>
        </NavStyled>
      </HeaderStyled>
    </>
  )
}

export default Header
