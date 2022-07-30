export type TIntialState = {
  attemps: TAttemp[]
  guessedWord: TAttemp['word'] | null
}

export type TAttemp = {
  word: string
  error: boolean
}

export type TEditWordPayload = {
  attemp: Partial<TAttemp>
}

export type TVerifyWordPayload = {
  word: TAttemp['word']
}

export type TVerifyWordRequestPayload = Pick<TVerifyWordPayload, 'word'>
