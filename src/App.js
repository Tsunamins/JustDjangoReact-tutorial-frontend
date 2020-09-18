import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import BaseRouter from './routes';
import * as actions from './store/actions/auth';
import CustomLayout from './containers/Layout';


class App extends React.Component {
  
  //every time component mounts going to call the action
  //call the dispatch, which will call the actoin
  componentDidMount(){
    this.props.onTryAutoSignup();

  }

  render(){
    console.log(this.props)
  return (
    <div className="App">
      <Router>
        {/* this.props info comes from the fact that connect has a mapstatetoprop */}
        <CustomLayout {...this.props}>
            <BaseRouter />
        </CustomLayout>
      </Router>

    </div>
  );
  }
}

// mapStateToProps instead of having state to be kept track of and passed along into code above, and kept track of ast state = :
// = takes in state to be used as properties in the app
// returning an object - what you want to map into a property
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

//so by adding this fucntion to connect, can pass in the associated data/state/props into 
//components above (i.e. CustomLayout)
export default connect(mapStateToProps, mapDispatchToProps)(App);
