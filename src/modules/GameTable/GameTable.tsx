import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Game } from '../../config'
import { useTypedSelector } from '../../hooks'
import { gameActions, getGameSelector } from '../../store'
import { Container, LetterBlock } from './styled'

const GameTable: FC = () => {
  const dispatch = useDispatch()

  const { attemps, guessedWord } = useTypedSelector(getGameSelector)

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

  useEffect(() => {
    !guessedWord && dispatch(gameActions.generateGuessedWord())
  }, [])

  return <Container>{Utils.generateBlocks()}</Container>
}

export default GameTable
