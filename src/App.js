import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { createBrowserHistory } from "history";
import Xroads from './Pages/xroads/xroads';
const History = createBrowserHistory();
function App() {
  return (
    <Router history={History}>
      <Switch>
        <Route 
          path="/" exact = {true}
         >
           <Login {...History} />
         </Route>
         <Route 
          path="/in"
         >
           <Xroads {...History} />
         </Route>
      </Switch>
    </Router>
  );
}

export default App;
