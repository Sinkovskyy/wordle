import { Env } from '../../../config'

export const GAME_URL = {
  verifyWord: (word: string) => `${Env.DICTIONARY_API}/api/v2/entries/en/${word}`,
}

export const GAME_TEXT = {
  notEnoughtLetters: {
    closeTime: 2500,
    text: 'Not enought letter',
  },
  notInWordList: {
    closeTime: 2500,
    text: 'Not in word list',
  },
  guessWord: {
    closeTime: 5000,
    text: 'Genius',
  },
}
