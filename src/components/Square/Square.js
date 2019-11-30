import React,{Component}   from 'react'; 
import './Square.css'

import Grid from '@material-ui/core/Grid';

class Square extends Component{

    state={

    }

    render(){
        return(
            <Grid container direction={"row"} className="questions">
                <Grid item xs={4} md={4} className="square">
                    <div className="square-div"></div>
                    ¿QUÉ?
                </Grid>
                <Grid item xs={4} className="square" md={4}>
                    <div className="square-div"></div>
                    ¿POR QUÉ?
                </Grid>
                <Grid item xs={4} className="square" md={4}>
                    <div className="square-div"></div>
                    ¿CÓMO?
                </Grid>
            </Grid>
        );
    }
}

export default Square;