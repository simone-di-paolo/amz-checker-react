import { connect } from "react-redux";
import { Dispatch } from 'redux';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { RootState } from "./store";

import {
  FETCH_USER
} from './widget/redux/actions/user'

interface StateProps {
    count: number;
}

interface DispatchProps {
    increment: () => void;
}

// App.tsx RIVISITATO
function App() {
  return (
    <>
      {/* Il BLOCCO principale. Mantiene il suo nome completo. */}
      <div className="amz-checker"> 
        {/* Gli ELEMENTI ora hanno nomi più corti e semplici. */}
        <div className="wrapper">
          <div className="left-sidebar">
            <div className="logo-container">
              <img src="#" className="logo" alt="logo" />
            </div>
          </div>
          <div className="content">
            <div className="top-bar">  {/* Nota: Ho rimosso il __ per coerenza */}
              {/* Contenuto della top bar */}
            </div>
          </div>
          <div className="right-sidebar">
            {/* Contenuto della sidebar destra */}
          </div>
        </div>
      </div>
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