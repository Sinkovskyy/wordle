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
}
