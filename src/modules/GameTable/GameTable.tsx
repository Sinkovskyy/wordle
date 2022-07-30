import { FC } from 'react'
import { Game } from '../../config'
import { useTypedSelector } from '../../hooks'
import { getGameSelector } from '../../store'
import { Container, LetterBlock } from './styled'

const GameTable: FC = () => {
  const { attemps } = useTypedSelector(getGameSelector)

  const Utils = {
    generateBlocks: () => {
      const blocks = []

      for (let i = 0; i < Game.ATTEMPS; i++) {
        const word = attemps[i]?.word || ''

        for (let j = 0; j < Game.WORD_LENGTH; j++) {
          const letter = word[j]
          if (letter) {
            blocks.push(<LetterBlock key={'' + i + j}>{letter}</LetterBlock>)
          } else {
            blocks.push(<LetterBlock key={'' + i + j} />)
          }
        }
      }

      return blocks
    },
  }

  return <Container>{Utils.generateBlocks()}</Container>
}

export default GameTable
