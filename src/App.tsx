import { connect } from "react-redux";
import { Dispatch } from 'redux'; // Importa il tipo Dispatch da Redux
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Assicurati che questa importazione sia corretta nel tuo progetto
import {
  FETCH_USER
} from './widget/redux/actions/user'

interface UserState {
    count: number;
}

interface RootState {
  user: UserState; 
  // ... altri reducer
}

interface StateProps {
    count: number;
}

interface DispatchProps {
    increment: () => void;
}

// Interfaccia combinata per tutti i Props del componente App
type AppProps = StateProps & DispatchProps;

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

      <p
    </>
  );
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    count: state.user.count
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    increment: () => dispatch({type: FETCH_USER._REQUEST })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);