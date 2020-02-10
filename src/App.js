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
import Consumismo_problem from './containers/Consumismo/ProblemView/ProblemView'
import Consumismo_areat from './containers/Consumismo/AreaTView/AreaTView'
import Consumismo_areaG from './containers/Consumismo/AreaGView/AreaGView'
import Consumismo_areaP from './containers/Consumismo/AreaPView/AreaPView'
import Consumismo_areaN from './containers/Consumismo/AreaNView/AreaNView'
import Consumismo_areaTE from './containers/Consumismo/AreaTEView/AreaTEView'
import Consumismo_who from './containers/Consumismo/WhoView/WhoView';
import Consumismo_why from './containers/Consumismo/WhyView/WhyView';
import Consumismo_cause from './containers/Consumismo/CauseView/CauseView';
import Consumo_init from './containers/Consumo/Initcon/Initcon';
import Consumo_what from './containers/Consumo/Whatcon/Whatcon';
import Consumo_areas from './containers/Consumo/Areascon/Areascon';
import Consumo_types from './containers/Consumo/Typescon/Types';
import Initfalsos from './containers/Falsos/Initfalsos/Initfalsos';
import Whatfalsos from './containers/Falsos/Whatfalsos/Whatfalsos';
import Rolesfalsos from './containers/Falsos/Rolesfalsos/Rolesfalsos';
import Productosfalsos from './containers/Falsos/Productosfalsos/Productosfalsos'

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
                    <Route path="/consumismo_problem" component={Consumismo_problem}/>
                    <Route path="/consumismo_areaT" component={Consumismo_areat}/>
                    <Route path="/consumismo_areaTE" component={Consumismo_areaTE}/>
                    <Route path="/consumismo_areaG" component={Consumismo_areaG}/>
                    <Route path="/consumismo_areaN" component={Consumismo_areaN}/>
                    <Route path="/consumismo_areaP" component={Consumismo_areaP}/>
                    <Route path="/consumismo_cause" component={Consumismo_cause}/>
                    <Route path="/consumo_init" component={Consumo_init}/>
                    <Route path="/consumo_what" component={Consumo_what}/>
                    <Route path="/consumo_areas" component={Consumo_areas}/>
                    <Route path="/consumo_types" component={Consumo_types}/>
                    <Route path="/falsos_init" component={Initfalsos}/>
                    <Route path="/falsos_what" component={Whatfalsos}/>
                    <Route path="/falsos_roles" component={Rolesfalsos}/>
                    <Route path="/falsos_productos" component={Productosfalsos}/>
                    <Route path="/who" component={Consumismo_who}/>
                    <Route path="/why" component={Consumismo_why}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;
