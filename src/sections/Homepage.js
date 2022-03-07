import styled from 'styled-components'
import { Title, Container, Stroked } from '../components/Components'
import ProjectThumbnail from '../components/ProjectThumbnail'
import useGSAP from '../hooks/useGSAP'
import useResolutionIsGreaterThan from '../hooks/useResolutionIsGreaterThan'

const Homepage = ({ styles, palette, mobile }) => {
  useGSAP()

  const fourK = useResolutionIsGreaterThan(3839)

  return (
    <>
      <Container
        id="home"
        padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
        style={{ alignItems: 'flex-end', minHeight: '500px' }}>
        <Title
          data-home-text
          data-gsap-text
          size={styles.titles.t2}
          color={styles.colors.text}>
          Hello, I am&nbsp;
          <Stroked size={styles.titles.t2} color={styles.colors.text}>
            Baptiste Dauphouy
          </Stroked>
          , a frontend developer.
        </Title>
      </Container>

      <Projects
        style={{
          gridTemplateColumns: mobile
            ? 'repeat(auto-fill, minmax(300px, 1fr))'
            : fourK
            ? 'repeat(auto-fill, minmax(640px, 1fr))'
            : 'repeat(auto-fill, minmax(400px, 1fr))',
        }}>
        <ProjectThumbnail
          palette={palette}
          title="vitaliplay"
          href="https://vitaliplay.eltha.fr">
          En cours - Mi-Avril 2022
        </ProjectThumbnail>
        <a href="https://carcollective.io">
          <ProjectThumbnail palette={palette} title="car-collective" />
        </a>
        <a href="https://benjamin-code.bdph.me">
          <ProjectThumbnail palette={palette} title="benjamin-code" />
        </a>
        <a href="https://github.com/baptistedph/hetic-games">
          <ProjectThumbnail palette={palette} title="hetic-games" />
        </a>
        <a href="https://mastermind.bdph.me">
          <ProjectThumbnail palette={palette} title="mastermind" />
        </a>
        <a href="https://bt-flexomatic.netlify.app/">
          <ProjectThumbnail palette={palette} title="flexomatic" />
        </a>
        <a href="https://bt-vue-countries-app.netlify.app/">
          <ProjectThumbnail palette={palette} title="vue-countries-app" />
        </a>
        <a href="https://github.com/baptistedph/subscribe-popup-generator">
          <ProjectThumbnail
            palette={palette}
            title="subscribe-popup-generator"
          />
        </a>
      </Projects>
    </>
  )
}

const Projects = styled.div`
  display: grid;
`

export default Homepage
