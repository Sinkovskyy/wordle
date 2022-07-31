import { screen } from '@testing-library/react'

import Keyboard from '../Keyboard'
import userEvent from '@testing-library/user-event'
import { renderWithContext } from '../../../test-utils'

describe('Keyboard component', () => {
  it('Click keyboard listener', async () => {
    const a = 'a'
    const b = 'b'
    const c = 'c'

    const { store } = renderWithContext(<Keyboard />)

    const aButton = await screen.findByText(a)
    const bButton = await screen.findByText(b)
    const cButton = await screen.findByText(c)

    userEvent.click(aButton)
    expect(store.getState().game.attemps[0].word).toBe(a.toUpperCase())
    userEvent.click(bButton)
    expect(store.getState().game.attemps[0].word).toBe((a + b).toUpperCase())
    userEvent.click(cButton)
    expect(store.getState().game.attemps[0].word).toBe((a + b + c).toUpperCase())
    userEvent.click(aButton)
    expect(store.getState().game.attemps[0].word).toBe((a + b + c + a).toUpperCase())
    userEvent.keyboard(a)
    expect(store.getState().game.attemps[0].word).toBe((a + b + c + a + a).toUpperCase())
    userEvent.keyboard('{backspace}')
    expect(store.getState().game.attemps[0].word).toBe((a + b + c + a).toUpperCase())
  })
})
