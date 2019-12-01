import React from 'react';
import './App.css';
import LoginView from './containers/LoginView/LoginView';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SliderView from './containers/SliderView/SliderView';
import WhatView from './containers/WhatView/WhatView';

const theme = createMuiTheme({
    palette: { secondary: {main: '#078005'}, primary: {main: '#83bf82'}}
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginView} /> {/*Esta es announcements*/}
                    <Route path="/slide" component={SliderView} />
                    <Route path="/what" component={WhatView}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;
