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
    const originalContent = $('.a-page');
    if (originalContent.length) {
      originalContent.eq(0).css('display', 'none');
    }
  }

  // Crea il contenitore per l'app React
  $('body').append('<div id="root"></div>');

  // Renderizza l'app React
  ReactDOM.createRoot($('#root')[0]).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
