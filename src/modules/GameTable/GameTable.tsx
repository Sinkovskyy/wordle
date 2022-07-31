import _ from 'lodash'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Game } from '../../config'
import { useTypedSelector } from '../../hooks'
import { gameActions, getGameSelector } from '../../store'
import { wordUtils } from '../../utils'
import { Container, LetterBlock } from './styled'
import { TLetterColor } from './types'

const GameTable: FC = () => {
  const dispatch = useDispatch()

  const { attemps, guessedWord } = useTypedSelector(getGameSelector)

  const Utils = {
    generateBlocks: function () {
      const blocks = []

      for (let row = 0; row < Game.ATTEMPS; row++) {
        const word = attemps[row]?.word || ''

        for (let position = 0; position < Game.WORD_LENGTH; position++) {
          const letter = word[position]

          if (letter) {
            const isCurrentlyGuessed = attemps.length != row + 1

            blocks.push(
              <LetterBlock
                color={isCurrentlyGuessed ? this.getLetterColor(letter, position) : ''}
                key={'' + row + position}
              >
                {letter}
              </LetterBlock>
            )
          } else {
            blocks.push(<LetterBlock key={'' + row + position} />)
          }
        }
      }

      return blocks
    },
    getLetterColor: (letter: string, position: number): TLetterColor => {
      if (attemps.length <= 1) {
        return ''
      }

      const letterState = wordUtils.getLetterState(letter)

      const isLetterInCorrectPosition = _.isNumber(
        letterState.letterCorrectPosition.find(
          (correctPosition) => correctPosition == position
        )
      )

      if (isLetterInCorrectPosition) {
        return 'green'
      }

      if (letterState.isInWord) {
        return 'yellow'
      }

      return 'grey'
    },
  }

  useEffect(() => {
    !guessedWord && dispatch(gameActions.generateGuessedWord())
  }, [])

  return <Container>{Utils.generateBlocks()}</Container>
}

export default GameTable
