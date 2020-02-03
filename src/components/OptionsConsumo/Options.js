import React,{Component}   from 'react'; 
import { Link } from "react-router-dom";

import './Optionsc.css'

import Grid from '@material-ui/core/Grid';

class Options extends Component{

    state={

    }

    render(){
        return(
            <Grid container direction={"column"} className="containerOpt" align="left">
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <Link  style={{ textDecoration: 'none' }}>
                        <text id="button">Consumidor</text>
                        </Link> 
                    </div>
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <Link to="/consumo_areas" style={{ textDecoration: 'none' }}>
                            <text id="button">Areas</text>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                    <Link  style={{ textDecoration: 'none' }}>
                            <text id="button">Tipos de compras</text>
                    </Link>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default Options ;