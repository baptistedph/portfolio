import styled from 'styled-components'
import { Container, Title, Column } from '../components/Components'
import useResolutionIsGreaterThan from '../hooks/useResolutionIsGreaterThan'

const Use = ({ styles }) => {
  const greaterThan = useResolutionIsGreaterThan(650)

  return (
    <Container id="use" padding={`${styles.paddings.p4} ${styles.paddings.p1}`}>
      <Column style={{ width: '100%', alignItems: 'center' }}>
        <Title
          data-use-text
          data-gsap-text
          size={styles.titles.t3}
          stroked
          color={styles.colors.text}>
          What I use
        </Title>
        <List greaterThan={greaterThan}>
          <Item
            data-use-text
            data-gsap-text
            color={styles.colors.text}
            size={styles.paragraphs.p1}>
            HTML
          </Item>
          <Item
            data-use-text
            data-gsap-text
            color={styles.colors.text}
            size={styles.paragraphs.p1}>
            SCSS
          </Item>
          <Item
            data-use-text
            data-gsap-text
            color={styles.colors.text}
            size={styles.paragraphs.p1}>
            Javascript
          </Item>
          <Item
            data-use-text
            data-gsap-text
            color={styles.colors.text}
            size={styles.paragraphs.p1}>
            React
          </Item>
          <Item
            data-use-text
            data-gsap-text
            color={styles.colors.text}
            size={styles.paragraphs.p1}>
            React Native
          </Item>
          <Item
            data-use-text
            data-gsap-text
            color={styles.colors.text}
            size={styles.paragraphs.p1}>
            Vue
          </Item>
          <Item
            data-use-text
            data-gsap-text
            color={styles.colors.text}
            size={styles.paragraphs.p1}>
            Three.js
          </Item>
          <Item
            data-use-text
            data-gsap-text
            color={styles.colors.text}
            size={styles.paragraphs.p1}>
            Git
          </Item>
        </List>
      </Column>
    </Container>
  )
}

const List = styled.ul`
  display: flex;
  margin-top: 50px;
  list-style: none;
  flex-wrap: wrap;
  justify-content: ${props => (props.greaterThan ? 'space-between' : 'center')};
  width: 100%;
  grid-gap: 50px;
`

const Item = styled.li`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 500;
`

export default Use
