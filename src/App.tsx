import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './store'
import GlobalStyles from './styles/global'
import { MainView } from './views'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <MainView />
      </PersistGate>
    </Provider>
  )
}

export default App
