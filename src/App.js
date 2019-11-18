import React from 'react';
import './App.css';
import LoginView from './containers/LoginView/LoginView';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import SliderView from './containers/SliderView/SliderView';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginView} /> {/*Esta es announcements*/}
          <Route path="/slide" component={SliderView} />

        </Switch>
    
    </BrowserRouter>
  
    
  );
}

export default App;
