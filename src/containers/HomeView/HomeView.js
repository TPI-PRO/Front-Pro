import React,{Component}   from 'react';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';

import './HomeView.css'
 
 
class HomeView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
 
 
    render(){
        return(
            <div className="home">
                <div><h1 className="home-title">ECO</h1></div>
                <div><h2 className="home-stitle">CONCIENCIA</h2></div>
                <Grid container spacing={3} direction="column">
                <Grid container spacing={8} justify="center">
                    <Grid item >
                        <Link  to="/login">
                            <Button variant="contained" color="secondary">Ingresar</Button>
                        </Link>
                    </Grid>
                    <Grid  item>
                         <Link  to="/register">
                            <Button variant="contained" color="primary">Registrar</Button>
                        </Link>  
                     </Grid> 
                </Grid>
                <Grid  item   align="center">
                        <Link  to="/slide">
                            <Button variant="contained">Usuario Invitado</Button>
                        </Link>     
                </Grid>

                </Grid>
                
            </div>
        );
    }
}
 
 
export default HomeView ;