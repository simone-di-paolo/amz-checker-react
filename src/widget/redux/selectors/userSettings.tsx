import { RootState } from '../../../store';

/**
 * Selettore per ottenere le impostazioni dell'interfaccia utente (UI) 
 * dalla fetta di stato 'userSettings'.
 *
 * @param {RootState} state - Lo stato radice (root state) dello store Redux.
 * @returns L'oggetto uiSettings.
 */
function getUserSettings(state: RootState) {
    // Si presume che il reducer userSettings sia montato con la chiave 'userSettings' nel rootReducer.
    return state.userSettings.uiSettings;
}

export { getUserSettings };
