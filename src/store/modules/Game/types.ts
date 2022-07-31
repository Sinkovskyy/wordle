export type TInitialState = {
  attemps: TAttemp[]
  guessedWord: TAttemp['word'] | null
  keyboardEnabled: boolean
}

export type TAttemp = {
  word: string
  error: boolean
}

export type TEditWordPayload = {
  attemp: Partial<TAttemp>
}

export type TVerifyWordPayload = {}

export type TVerifyWordRequestPayload = {
  word: TAttemp['word']
}

export type TSetKeyboardStatePayload = Pick<TInitialState, 'keyboardEnabled'>

export type TSetGuessedWordPayload = Pick<TInitialState, 'guessedWord'>
