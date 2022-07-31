import _ from 'lodash'
import { store } from '../store'

export const wordUtils = {
  charIsLetter: (char: string): boolean => {
    return /^[a-zA-Z]+$/.test(char) && char.length == 1
  },

  getRandomWord: (): string => {
    const words: string[] = [
      'house',
      'upset',
      'world',
      'money',
      'loyal',
      'prise',
      'seven',
      'about',
      'plane',
    ]

    return words[Math.floor(Math.random() * words.length)]
  },
  getLetterPosition: (letter: string, word: string): number[] => {
    const position: number[] = []

    word.split('').forEach((wordLetter, index) => {
      wordLetter.toUpperCase() == letter.toUpperCase() && position.push(index)
    })

    return position
  },
  getLetterPositionInAttempWords: function (letter: string): number[] {
    const { attemps } = store.getState().game

    let letterPositions: number[] = []

    for (const attemp of attemps.slice(0, attemps.length - 1)) {
      const letterPositionsInAttempWord: number[] = this.getLetterPosition(
        letter,
        attemp.word
      )

      letterPositions = _.uniq([...letterPositions, ...letterPositionsInAttempWord])
    }

    return letterPositions
  },
  getLetterState: function (letter: string): {
    isInWord: boolean
    letterCorrectPosition: number[]
  } {
    const { guessedWord } = store.getState().game

    const letterPositionsInGuessedWord: number[] = this.getLetterPosition(
      letter,
      guessedWord as string
    )

    // Check if letter in guessed word
    if (!letterPositionsInGuessedWord.length) {
      return { isInWord: false, letterCorrectPosition: [] }
    }

    const letterPositionsInAttempWord = this.getLetterPositionInAttempWords(letter)

    // Check if letter in attemp words
    if (!letterPositionsInAttempWord.length) {
      return { isInWord: false, letterCorrectPosition: [] }
    }

    const letterCorrectPosition = letterPositionsInAttempWord.filter((position) =>
      _.isNumber(
        letterPositionsInGuessedWord.find(
          (guessedPosition) => guessedPosition == position
        )
      )
    )

    return {
      isInWord: true,
      letterCorrectPosition,
    }
  },
}
