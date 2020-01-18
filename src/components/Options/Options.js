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
                        <a id="button" href="google.com">Consumidor</a>
                    </div>
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <a id="button" href="facebook.com">Areas</a>
                    </div>
                    
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <a id="button" href="hallo.com">Tipos de compra</a>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default Options ;