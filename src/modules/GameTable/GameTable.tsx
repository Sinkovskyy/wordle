import { FC } from 'react'
import { Container, LetterBlock } from './styled'

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
    <Container>
      {arr.map((row) =>
        row.map((letter, key) => <LetterBlock key={key}>{letter}</LetterBlock>)
      )}
    </Container>
  )
}

export default GameTable
