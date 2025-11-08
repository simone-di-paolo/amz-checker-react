import { connect } from "react-redux";
import './App.scss';

/*
  interface StateProps {
      count: number;
  }
  
  interface DispatchProps {
      increment: () => void;
  }
*/

function MainScreen() {

    return (
        <div className="main-screen-container">
            <div className="main-screen-header">

            </div>
            <div className="main-screen-body">
                <div className="queue-container rfy-queue">
                    <div className="queue-header">

                    </div>
                    <div className="rfy-body">
                        <div className="products-grid">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
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
*/
export default connect()(MainScreen);