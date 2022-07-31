import _ from 'lodash'
import { WORDS } from '../config'
import { store } from '../store'

export const wordUtils = {
  charIsLetter: (char: string): boolean => {
    return /^[a-zA-Z]+$/.test(char) && char.length == 1
  },

  getRandomWord: (): string => {
    return WORDS[Math.floor(Math.random() * WORDS.length)]
  },
  getLetterPositions: (letter: string, word: string): number[] => {
    const position: number[] = []
    if (!word) return position
    word.split('').forEach((wordLetter, index) => {
      wordLetter.toUpperCase() == letter.toUpperCase() && position.push(index)
    })

    return position
  },
  getLetterPositionInAttempWords: function (letter: string): number[] {
    const { attemps } = store.getState().game

    let letterPositions: number[] = []

    for (const attemp of attemps.slice(0, attemps.length - 1)) {
      const letterPositionsInAttempWord: number[] = this.getLetterPositions(
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

    const letterPositionsInGuessedWord: number[] = this.getLetterPositions(
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
