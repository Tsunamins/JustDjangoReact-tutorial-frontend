import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import BaseRouter from './routes';


import CustomLayout from './containers/Layout'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Router>
        <CustomLayout>
            <BaseRouter />

        </CustomLayout>
      </Router>

    </div>
  );
  }
}

export default App;
