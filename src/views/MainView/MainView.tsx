import { FC } from 'react'
import { FlexWrapper } from '../../components'
import { GameTable, Header, Keyboard } from '../../modules'

const MainView: FC = () => {
  return (
    <FlexWrapper direction="column" justify="space-between" height="100vh">
      <Header />
      <GameTable />
      <Keyboard />
    </FlexWrapper>
  )
}

export default MainView
