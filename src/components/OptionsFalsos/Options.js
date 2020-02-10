import React,{Component}   from 'react'; 
import { Link } from "react-router-dom";

import './Optionsf.css'

import Grid from '@material-ui/core/Grid';

class Options extends Component{

    state={

    }

    render(){
        return(
            <Grid container direction={"column"} className="containerOpt" align="left">
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <Link to="/consumismo_problem" style={{ textDecoration: 'none' }}>
                        <text id="button">Roles</text>
                        </Link>  
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default Options ;