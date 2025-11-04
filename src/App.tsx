import { connect } from "react-redux";
import { Dispatch } from 'redux'; // Importa il tipo Dispatch da Redux
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Assicurati che questa importazione sia corretta nel tuo progetto
import {
  USER_UPDATE_COUNT
} from './widget/redux/actions/user'

// =================================================================
// 1. DEFINIZIONE DELLE INTERFACCE (Tipizzazione)
// =================================================================

// Interfaccia per la porzione di Stato (user) che ci interessa
interface UserState {
    count: number;
    // Aggiungi qui gli altri campi del tuo stato utente se necessario
}

// Interfaccia per lo Stato Globale (RootState)
// Assicurati che 'user' corrisponda al nome del tuo reducer nel combineReducers
interface RootState {
  user: UserState; 
  // ... altri reducer
}

// Interfaccia per i Props Mappati dallo Stato (mapStateToProps)
interface StateProps {
    count: number;
}

// Interfaccia per i Props Mappati dalle Azioni (mapDispatchToProps)
interface DispatchProps {
    increment: () => void;
}

// Interfaccia combinata per tutti i Props del componente App
type AppProps = StateProps & DispatchProps;


// =================================================================
// 2. COMPONENTE FUNZIONALE APP
// =================================================================

// Applica l'interfaccia AppProps al componente
function App({ count, increment }: AppProps) {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}


// =================================================================
// 3. MAPPER REDUX TIPIZZATI
// =================================================================

// mapStateToProps: Tipizza l'argomento 'state' come RootState e il ritorno come StateProps
const mapStateToProps = (state: RootState): StateProps => {
  return {
    count: state.user.count
  }
}

// mapDispatchToProps: Tipizza l'argomento 'dispatch' come Dispatch e il ritorno come DispatchProps
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    increment: () => dispatch({type: USER_UPDATE_COUNT })
  }
}

// Esporta il componente connesso
export default connect(mapStateToProps, mapDispatchToProps)(App);