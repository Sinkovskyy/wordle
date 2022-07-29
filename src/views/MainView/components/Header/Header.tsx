import { FC } from 'react'
import { H1 } from '../../../../components'
import { Container, LogoContainer, SettingsButton } from './styled'

const Header: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <H1>Wordle</H1>
      </LogoContainer>
      <SettingsButton />
    </Container>
  )
}

export default Header
