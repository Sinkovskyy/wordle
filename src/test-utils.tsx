import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import { store, persistor } from './store'

export function renderWithContext(element: React.ReactElement) {
  const component = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )

  return { store, component }
}

export function shallowWithContext(element: React.ReactElement) {
  const component = shallow(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )

  return { store, component }
}
