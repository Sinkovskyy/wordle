import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Game } from '../../config'
import { useTypedSelector } from '../../hooks'
import { gameActions, getGameSelector } from '../../store'
import { wordUtils } from '../../utils'
import { Tile } from './components'
import { Container } from './styled'

const GameTable: FC = () => {
  const dispatch = useDispatch()

  const { attemps, guessedWord } = useTypedSelector(getGameSelector)

  const Utils = {
    generateBlocks: function () {
      const blocks = []

      for (let row = 0; row < Game.ATTEMPS; row++) {
        const word = attemps[row]?.word || ''

        for (let column = 0; column < Game.WORD_LENGTH; column++) {
          const letter = word[column]

          if (letter) {
            blocks.push(
              <Tile key={'' + row + column} row={row} column={column} letter={letter} />
            )
          } else {
            blocks.push(<Tile key={'' + row + column} row={row} column={column} />)
          }
        }
      }

      return blocks
    },
  }

  // Generate new guessed word
  useEffect(() => {
    !guessedWord &&
      dispatch(gameActions.setGuessedWord({ guessedWord: wordUtils.getRandomWord() }))
  }, [guessedWord])

  return <Container>{Utils.generateBlocks()}</Container>
}

export default GameTable
