import React from 'react';
import './App.css';
import HomeView from './containers/HomeView/HomeView'
import LoginView from './containers/LoginView/LoginView';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import RegisterView from './containers/RegisterView/RegisterView'
import SliderView from './containers/SliderView/SliderView';
import WhatView from './containers/WhatView/WhatView';
import WhoView from './containers/WhoView/WhoView';
import WhyView from './containers/WhyView/WhyView';

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
                    <Route path="/what" component={WhatView}/>
                    <Route path="/who" component={WhoView}/>
                    <Route path="/why" component={WhyView}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;
