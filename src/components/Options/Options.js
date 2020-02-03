import React,{Component}   from 'react'; 
import { Link } from "react-router-dom";

import './Options.css'

import Grid from '@material-ui/core/Grid';

class Options extends Component{

    state={

    }

    render(){
        return(
            <Grid container direction={"column"} className="containerOpt" align="left">
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="halle">
                        <Link to="/consumismo_problem" style={{ textDecoration: 'none' }}>
                        <text id="button">Problemáticas</text>
                        </Link>  
                    </div>
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="halle">
                        <Link to="/consumismo_cause" style={{ textDecoration: 'none' }}>
                            <text id="button">Causas</text>
                        </Link>
                    </div>
                    
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="halle">
                        <Link style={{ textDecoration: 'none' }}>
                            <text id="button">Aumento y Disminucion</text>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default Options ;