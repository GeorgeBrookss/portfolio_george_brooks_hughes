import {
  SectContainer,
  SectionStyled,
  ProjectList,
  ProjectCard
} from './styles'
import Separador from '../../images/separador.png'
import Disney from '../../images/projetoDisney.png'
import Efood from '../../images/projetoEfood.png'
import Reikai from '../../images/projetoReikai.png'
import YuyuBio from '../../images/projetoYuyuBio.png'
import HamburgueriaZ from '../../images/projetoHamburgeriaZ.png'
import ManualDeCS from '../../images/projetoManualCS.png'

const Section = () => {
  return (
    <>
      <SectionStyled>
        <SectContainer>
          <h2>
            <span>
              <img src={Separador} alt="" />
            </span>
            APRESENTAÇÃO
          </h2>
          <p>
            Sou Desenvolvedor Full Stack com proficiência em HTML, CSS,
            JavaScript e SQL, além de experiência com desenvolvimento mobile
            usando Android Studio. No front-end, domino a criação de interfaces
            modernas, acessíveis e responsivas, com atenção à usabilidade e
            integração com diferentes tecnologias. Tenho familiaridade com
            versionamento de código com Git e GitHub, e aplico boas práticas de
            desenvolvimento e refatoração contínua para manter meus projetos
            atualizados e escaláveis.
          </p>
        </SectContainer>
        <SectContainer id="front-end">
          <h2>
            <span>
              <img src={Separador} alt="" />
            </span>
            PROJETOS FRONT-END
          </h2>
          <div className="project-list">
            <ProjectList>
              <ProjectCard>
                <a href="https://e-food-flax.vercel.app/" target="blank">
                  <div className="overlay" />
                  <div>
                    <img src={Efood} alt="Projeto Efood" />
                    <h3>EFOOD</h3>
                    <p>
                      Projeto acadêmico desenvolvido com a finalidade de aplicar
                      API em um site de compras, baseado no Ifood
                    </p>
                  </div>
                </a>
              </ProjectCard>
              <ProjectCard>
                <a
                  href="https://landing-page-reikai-shokudo--teal.vercel.app/"
                  target="blank"
                >
                  <div className="overlay" />
                  <div>
                    <img src={Reikai} alt="Projeto Reikai" />
                    <h3>Restaurante Reikai Shokudo</h3>
                    <p>
                      Projeto acadêmico desenvolvido com a finalidade de aplicar
                      API em um site de compras, baseado no Ifood
                    </p>
                  </div>
                </a>
              </ProjectCard>
              <ProjectCard>
                <a
                  href="https://clone-disney-plus-olive-two.vercel.app/"
                  target="blank"
                >
                  <div className="overlay" />
                  <div>
                    <img src={Disney} alt="Projeto DisneyPlus" />
                    <h3>Landing page clone disney+</h3>
                    <p>
                      Projeto acadêmico desenvolvido com a finalidade de aplicar
                      API em um site de compras, baseado no Ifood
                    </p>
                  </div>
                </a>
              </ProjectCard>
            </ProjectList>
          </div>
        </SectContainer>
        <SectContainer id="back-end">
          <h2>
            <span>
              <img src={Separador} alt="" />
            </span>
            PROJETOS BACK-END
          </h2>
          <div className="project-list">
            <ProjectList>
              <ProjectCard>
                <a href="#">
                  <div className="overlay" />
                  <div>
                    <img src={Disney} alt="Projeto DisneyPlus" />
                    <h3>EFOOD</h3>
                    <p>
                      Projeto acadêmico desenvolvido com a finalidade de aplicar
                      API em um site de compras, baseado no Ifood
                    </p>
                  </div>
                </a>
              </ProjectCard>
              <ProjectCard>
                <a href="#">
                  <div className="overlay" />
                  <div>
                    <img src={Disney} alt="Projeto DisneyPlus" />
                    <h3>EFOOD</h3>
                    <p>
                      Projeto acadêmico desenvolvido com a finalidade de aplicar
                      API em um site de compras, baseado no Ifood
                    </p>
                  </div>
                </a>
              </ProjectCard>
              <ProjectCard>
                <a href="#">
                  <div className="overlay" />
                  <div>
                    <img src={Disney} alt="Projeto DisneyPlus" />
                    <h3>EFOOD</h3>
                    <p>
                      Projeto acadêmico desenvolvido com a finalidade de aplicar
                      API em um site de compras, baseado no Ifood
                    </p>
                  </div>
                </a>
              </ProjectCard>
            </ProjectList>
          </div>
        </SectContainer>
        <SectContainer id="mobile">
          <h2>
            <span>
              <img src={Separador} alt="" />
            </span>
            PROJETOS MOBILE
          </h2>
          <div className="project-list">
            <ProjectList>
              <ProjectCard>
                <a
                  href="https://github.com/GeorgeBrookss/Manual-de-Ciberseguranca.git"
                  target="blank"
                >
                  <div className="overlay" />
                  <div>
                    <img
                      src={ManualDeCS}
                      alt="Projeto Manual de Cibersegurança"
                    />
                    <h3>Manual de Cibersegurança</h3>
                    <p>
                      Projeto acadêmico desenvolvido com a finalidade de aplicar
                      API em um site de compras, baseado no Ifood
                    </p>
                  </div>
                </a>
              </ProjectCard>
              <ProjectCard>
                <a
                  href="https://github.com/GeorgeBrookss/HamburgueriaZ.git"
                  target="blank"
                >
                  <div className="overlay" />
                  <div>
                    <img src={HamburgueriaZ} alt="Projeto HamburgueriaZ" />
                    <h3>HamburgueriaZ</h3>
                    <p>
                      Projeto acadêmico desenvolvido com a finalidade de aplicar
                      API em um site de compras, baseado no Ifood
                    </p>
                  </div>
                </a>
              </ProjectCard>
              <ProjectCard>
                <a
                  href="https://github.com/GeorgeBrookss/Aplicativo-Yuyu-Hakusho-Biography-android-.git"
                  target="blank"
                >
                  <div className="overlay" />
                  <div>
                    <img src={YuyuBio} alt="Projeto Yuyu Hakusho Biografia" />
                    <h3>Yuyu Hakusho Biography</h3>
                    <p>
                      Projeto acadêmico desenvolvido com a finalidade de aplicar
                      API em um site de compras, baseado no Ifood
                    </p>
                  </div>
                </a>
              </ProjectCard>
            </ProjectList>
          </div>
        </SectContainer>
      </SectionStyled>
    </>
  )
}

export default Section
