import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import store from './store.ts';
import $ from 'jquery'; // <-- 1. Importa jQuery

const isDevEnvironment = window.location.hostname.endsWith('.cloudworkstations.dev');

if (isDevEnvironment || window.location.hash === '#grapfinder') {
  if (window.location.hash === '#grapfinder') {
    const originalContent = document.getElementById('a-page'); 
    if (originalContent) {
      originalContent.style.display = 'none';
    }
  }

  // 2. Usa jQuery per creare e aggiungere il div
  $('body').append('<div id="root"></div>');

  // 3. Ottieni il div (con JavaScript o jQuery) e renderizza React
  const rootDiv = document.getElementById('root');
  if (rootDiv) {
    ReactDOM.createRoot(rootDiv).render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    );
  } else {
    console.error("Impossibile trovare l'elemento #root. L'app non può avviarsi.");
  }
}
