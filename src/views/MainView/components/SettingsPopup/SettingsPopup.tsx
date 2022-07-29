import { FC } from 'react'
import { H2 } from '../../../../components'
import {
  Container,
  PopupContainer,
  Background,
  CrossButton,
  PopupContantWrapper,
  RefreshButton,
  RefreshButtonWrapper,
} from './styled'

type TSettingsPopup = {
  closePopupHandler: () => void
}

const SettingsPopup: FC<TSettingsPopup> = ({ closePopupHandler }) => {
  return (
    <Container>
      <Background onClick={closePopupHandler} />
      <PopupContainer>
        <PopupContantWrapper>
          <H2>Settings</H2>
          <RefreshButtonWrapper>
            <RefreshButton />
          </RefreshButtonWrapper>
          <CrossButton onClick={closePopupHandler} />
        </PopupContantWrapper>
      </PopupContainer>
    </Container>
  )
}

export default SettingsPopup
