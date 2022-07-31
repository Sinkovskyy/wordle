import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { H2 } from '../../components'
import { gameActions } from '../../store'
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
  const dispatch = useDispatch()

  const Events = {
    restartGame: () => {
      dispatch(gameActions.restartGame())
      closePopupHandler()
    },
  }

  return (
    <Container>
      <Background onClick={closePopupHandler} />
      <PopupContainer>
        <PopupContantWrapper>
          <H2>Settings</H2>
          <RefreshButtonWrapper>
            <RefreshButton onClick={Events.restartGame} />
          </RefreshButtonWrapper>
          <CrossButton onClick={closePopupHandler} />
        </PopupContantWrapper>
      </PopupContainer>
    </Container>
  )
}

export default SettingsPopup
