import PropTypes from 'prop-types';
import { connect } from "react-redux";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  USER_UPDATE_COUNT
} from './widget/redux/actions/user'

function App({
  count,
  increment
}) {

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
  )
}

App.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,

  state: PropTypes.object,
  dispatch: PropTypes.func
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    count: state?.user?.count
  }
}
// here mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: USER_UPDATE_COUNT })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
