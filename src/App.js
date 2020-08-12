import React from 'react';

import 'antd/dist/antd.css';
import './App.css';
import CustomLayout from './containers/Layout'
import ArticleList from './containers/ArticleListView'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <CustomLayout>
          <ArticleList />

      </CustomLayout>

    </div>
  );
  }
}

export default App;
