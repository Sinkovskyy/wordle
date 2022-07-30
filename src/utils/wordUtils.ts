export const wordUtils = {
  charIsLetter: (char: string): boolean => {
    return /^[a-zA-Z]+$/.test(char) && char.length == 1
  },
}
