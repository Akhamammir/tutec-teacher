import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';


function Xroads() {
  return (
    <Router>
      <Switch>
        <Route 
          path="/in/home"
         >
           <Main/>
         </Route>
      </Switch>
    </Router>
  );
}

export default Xroads;