import { FC, useState } from 'react'
import { H1 } from '../../components'
import { SettingsPopup } from '../SettingsPopup'
import { Container, LogoContainer, SettingsButton } from './styled'

const Header: FC = () => {
  const [popupVisibility, setPopupVisibility] = useState<boolean>(false)

  return (
    <Container>
      <LogoContainer>
        <H1>Wordle</H1>
      </LogoContainer>
      <SettingsButton onClick={() => setPopupVisibility(true)} />
      {popupVisibility && (
        <SettingsPopup closePopupHandler={() => setPopupVisibility(false)} />
      )}
    </Container>
  )
}

export default Header
