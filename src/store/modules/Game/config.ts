import { Env } from '../../../config'

export const GAME_URL = {
  verifyWord: (word: string) => `${Env.DICTIONARY_API}/api/v2/entries/en/${word}`,
}
