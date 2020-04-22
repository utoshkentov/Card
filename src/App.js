import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Route, Switch} from 'react-router-dom';
import CardMain from "./components/Card/Card";


function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={CardMain} />
      </Switch>
    </>
  );
}

export default App;
