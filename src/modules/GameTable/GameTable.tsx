import { FC } from 'react'
import { FlexWrapper } from '../../components'
import { LetterBlock } from './styled'

const GameTable: FC = () => {
  const arr = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]

  return (
    <FlexWrapper wrap="wrap" gap={5} width="290px">
      {arr.map((row) =>
        row.map((letter, key) => <LetterBlock key={key}>{letter}</LetterBlock>)
      )}
    </FlexWrapper>
  )
}

export default GameTable
