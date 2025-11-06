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

function App() {
  return (
    <>
      <div className="amz-checker">
        <div className="amz-checker-wrapper">
          <div className="amz-checker-left-sidebar">
            
          </div>
          <div className="amz-checker-content">
            
          </div>
          <div className="amz-checker-right-sidebar">
              <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
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