import { FooterStyled } from './styles'
const Footer = () => (
  <>
    <div>
      <FooterStyled id="contatos">
        <h2>
          C&nbsp;&nbsp;O&nbsp;&nbsp;N&nbsp;&nbsp;T&nbsp;&nbsp;A&nbsp;&nbsp;T&nbsp;&nbsp;O
        </h2>
        <ul>
          <li>
            <a
              className="gradient"
              href="https://github.com/GeorgeBrookss"
              target="blank"
            >
              GITHUB
            </a>
            <span>/</span>
          </li>
          <li>
            <a
              className="gradient2"
              href="https://linkedin.com/in/george-m-brooks"
              target="blank"
            >
              LINKEDIN
            </a>
            <span>/</span>
          </li>
          <li>
            <a
              className="gradient3"
              href="https://vercel.com/georges-projects-609e5e33"
              target="blank"
            >
              VERCEL
            </a>
            <span>/</span>
          </li>
          <li>
            <a className="gradient4" href="mailto:georgebrooks.camps@gmail.com">
              GMAIL
            </a>
          </li>
        </ul>
      </FooterStyled>
    </div>
  </>
)

export default Footer
