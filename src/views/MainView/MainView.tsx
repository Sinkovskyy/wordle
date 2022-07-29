import { FC } from 'react'
import { FlexWrapper } from '../../components'
import { Header } from './components'

const MainView: FC = () => {
  return (
    <FlexWrapper direction="column">
      <Header />
    </FlexWrapper>
  )
}

export default MainView
