import { FC } from 'react'
import { FlexWrapper } from '../../components'
import { Header, GameTable } from './components'

const MainView: FC = () => {
  return (
    <FlexWrapper direction="column" justify="space-between" height="100vh">
      <Header />
      <GameTable />

      {/* TODO: need remove soon */}
      <div></div>
    </FlexWrapper>
  )
}

export default MainView
