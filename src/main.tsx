import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import store from './store.ts';

const isDevEnvironment = window.location.hostname.endsWith('.cloudworkstations.dev');

// Controlla se siamo nell'ambiente di sviluppo o sulla pagina di Amazon con il segnale corretto
if (isDevEnvironment || window.location.hash === '#grapfinder') {
  // Nascondi il contenuto originale della pagina se necessario
  if (window.location.hash === '#grapfinder') {
    const originalContent = document.getElementById('main-content'); // Esempio, usa il selettore corretto
    if (originalContent) {
      originalContent.style.display = 'none';
    }
  }

  // Crea il contenitore per l'app React
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);

  // Renderizza l'app React
  ReactDOM.createRoot(rootDiv).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
