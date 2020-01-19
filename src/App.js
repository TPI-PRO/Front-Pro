import React from 'react';
import './App.css';
import HomeView from './containers/HomeView/HomeView'
import LoginView from './containers/LoginView/LoginView';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import RegisterView from './containers/RegisterView/RegisterView'
import SliderView from './containers/SliderView/SliderView';
import Consumismo_init from './containers/Consumismo/InitView/InitView';
import Consumismo_what from './containers/Consumismo/WhatView/WhatView';
import Consumismo_who from './containers/Consumismo/WhoView/WhoView';
import Consumismo_why from './containers/Consumismo/WhyView/WhyView';

const theme = createMuiTheme({
    palette: { secondary: {main: '#078005'}, primary: {main: '#83bf82'}}
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeView} /> {/*Esta es announcements*/}
                    <Route exact path="/login" component={LoginView} /> {/*Esta es announcements*/}
                    <Route exact path="/register" component={RegisterView} /> 
                    <Route path="/slide" component={SliderView} />
                    <Route path="/consumismo_init" component={Consumismo_init}/>
                    <Route path="/consumismo_what" component={Consumismo_what}/>
                    <Route path="/who" component={Consumismo_who}/>
                    <Route path="/why" component={Consumismo_why}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;
