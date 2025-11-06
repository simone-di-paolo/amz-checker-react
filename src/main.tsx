import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.scss';
import store from './store.ts';
import $ from 'jquery';

const isDevEnvironment = window.location.hostname.endsWith('.cloudworkstations.dev');

if (isDevEnvironment || window.location.hash === '#grapfinder') {

  // Pulisce le classi dal body e aggiunge la nostra classe custom
  $('body').removeClass().addClass('amz-checker-body');

  if (window.location.hash === '#grapfinder') {
    const originalContent = document.getElementById('a-page'); 
    if (originalContent) {
      originalContent.style.display = 'none';
    }
  }

  $('body').append('<div id="root"></div>');

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
