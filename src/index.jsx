import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Footer from './components/Footer'
import App from './App'
import './index.css'

import store from './store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
     <Provider store={store}>
      <App />
    </Provider>
    <Footer />
  </StrictMode>,
)
