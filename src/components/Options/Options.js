import React,{Component}   from 'react'; 
import './Options.css'


import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

class Options extends Component{

    state={

    }

    render(){
        return(
            <Grid container direction={"column"} className="containerOpt">
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <a id="button" href="google.com">Escuchar</a>
                    </div>
                    
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <a id="button" href="facebook.com">ver</a>
                    </div>
                    
                </Grid>
                <Grid item xs={4} md={4} className="square" align="center">
                    <div id="hallo">
                        <a id="button" href="hallo.com">Compartir</a>
                    </div>
                    
                </Grid>
            </Grid>
        );
    }
}

export default Options ;