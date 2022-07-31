import _ from 'lodash'
import { gameActions, store } from '../../store'
import { wordUtils } from '../wordUtils'

describe('word utilities methods', () => {
  it('char is Letter', () => {
    expect(wordUtils.charIsLetter('a')).toBeTruthy()
    expect(wordUtils.charIsLetter('B')).toBeTruthy()
    expect(wordUtils.charIsLetter('c')).toBeTruthy()
    expect(wordUtils.charIsLetter('csd')).toBeFalsy()
    expect(wordUtils.charIsLetter('1')).toBeFalsy()
    expect(wordUtils.charIsLetter('1d')).toBeFalsy()
    expect(wordUtils.charIsLetter('.')).toBeFalsy()
  }),
    it('get letter position in word', () => {
      expect(
        _.isEqual(wordUtils.getLetterPositions('l', 'world').sort(), [3])
      ).toBeTruthy()

      expect(
        _.isEqual(wordUtils.getLetterPositions('l', 'lorldl').sort(), [0, 3, 5])
      ).toBeTruthy()

      expect(
        _.isEqual(wordUtils.getLetterPositions('a', 'lorldl').sort(), [])
      ).toBeTruthy()
    })

  it('get letter position in attemp words', () => {
    store.dispatch(gameActions.editWord({ attemp: { word: 'lordl' } }))
    store.dispatch(gameActions.saveWord())
    store.dispatch(gameActions.editWord({ attemp: { word: 'loldw' } }))
    store.dispatch(gameActions.saveWord())
    store.dispatch(gameActions.editWord({ attemp: { word: 'lllll' } }))
    expect(
      _.isEqual(wordUtils.getLetterPositionInAttempWords('l').sort(), [0, 2, 4])
    ).toBeTruthy()
    store.dispatch(gameActions.saveWord())
    expect(
      _.isEqual(wordUtils.getLetterPositionInAttempWords('l').sort(), [0, 1, 2, 3, 4])
    ).toBeTruthy()
    expect(
      _.isEqual(wordUtils.getLetterPositionInAttempWords('a').sort(), [])
    ).toBeTruthy()

    expect(
      _.isEqual(wordUtils.getLetterPositionInAttempWords('53').sort(), [])
    ).toBeTruthy()

    store.dispatch(gameActions.restartGame())
    expect(
      _.isEqual(wordUtils.getLetterPositionInAttempWords('l').sort(), [])
    ).toBeTruthy()
  })

  it('get letter state', () => {
    store.dispatch(gameActions.setGuessedWord({ guessedWord: 'TEEGE' }))

    store.dispatch(gameActions.editWord({ attemp: { word: 'TEEET' } }))
    expect(wordUtils.getLetterState('t').isInWord).toBeFalsy()

    expect(
      _.isEqual(wordUtils.getLetterState('t').letterCorrectPosition.sort(), [0])
    ).toBeFalsy()

    store.dispatch(gameActions.saveWord())
    expect(wordUtils.getLetterState('t').isInWord).toBeTruthy()
    expect(
      _.isEqual(wordUtils.getLetterState('t').letterCorrectPosition.sort(), [0])
    ).toBeTruthy()
    store.dispatch(gameActions.editWord({ attemp: { word: 'BEESE' } }))
    store.dispatch(gameActions.saveWord())
    expect(
      _.isEqual(wordUtils.getLetterState('e').letterCorrectPosition.sort(), [1, 2, 4])
    ).toBeTruthy()
    expect(wordUtils.getLetterState('t').isInWord).toBeTruthy()
    expect(wordUtils.getLetterState('te').isInWord).toBeFalsy()
    store.dispatch(gameActions.editWord({ attemp: { word: 'BETEG' } }))
    store.dispatch(gameActions.saveWord())
    expect(wordUtils.getLetterState('b').isInWord).toBeFalsy()
  })
})
