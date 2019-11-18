import React from 'react';
import './App.css';
import LoginView from './containers/LoginView/LoginView';
import { BrowserRouter, Route,Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginView} /> {/*Esta es announcements*/}
          {/*<Route path="/camunda" component={TestBPMN} />*/}

        </Switch>
    
    </BrowserRouter>
  
    
  );
}

export default App;
