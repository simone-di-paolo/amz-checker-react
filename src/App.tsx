import { useState } from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import './App.scss';
import { RootState } from "./store";
import {
  getUserSettings
} from './widget/redux/selectors/userSettings'

import {
  CHANGE_SCREEN
} from './widget/redux/actions/userSettings'

interface StateProps {
    screen: object;
}

interface DispatchProps {
    changeScreen: (selectedScreen: string) => void;
}

// App.tsx RIVISITATO
function App() {

  return (
    <>
      <div className="amz-checker"> 
        <div className="wrapper">
          <div className="left-sidebar">
            <div className="logo-container">
              <img src="#" className="logo" alt="logo" />
            </div>
          </div>
          <div className="content">
            <div className="top-bar">
              {/* Contenuto della top bar */}
            </div>
            <div className="screen-container">

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
    screen: getUserSettings(state)
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeScreen: (selectedScreen) => dispatch({type: CHANGE_SCREEN, selectedScreen })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);