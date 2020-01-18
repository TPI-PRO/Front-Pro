import React,{Component}   from 'react';

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
                <Grid container className="field_log">
                    <Grid item xs={4} md={4} align="center">
                        <Button variant="contained" color="secondary">Ingresar</Button>
                    </Grid>
                    <Grid  item xs={4} md={4} align="center">
                        <Button variant="contained" color="primary">Registrar</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
 
export default HomeView ;