import React,{Component}   from 'react'; 
import './Options.css'

import Grid from '@material-ui/core/Grid';

class Options extends Component{

    state={

    }

    render(){
        return(
            <Grid container direction={"column"} className="containerOpt" align="left">
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <a id="button" href="/consumismo_problem">Problemáticas</a>
                    </div>
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <a id="button" href="/consumismo_cause">Causas</a>
                    </div>
                    
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <a id="button" href="hallo.com">Aumento y Disminución</a>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default Options ;