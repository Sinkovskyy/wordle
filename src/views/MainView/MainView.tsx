import { FC } from 'react'
import { FlexWrapper } from '../../components'
import { GameTable, Header } from '../../modules'

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
