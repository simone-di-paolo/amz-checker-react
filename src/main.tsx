import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.ts'

const root = document.createElement("div")
root.id = "crx-root"
document.body.appendChild(root)

ReactDOM.createRoot(document.getElementById('crx-root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
