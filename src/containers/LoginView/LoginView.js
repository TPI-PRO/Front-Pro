import React,{Component}   from 'react'; 
import './LoginView.css'
import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


class LoginView extends Component{

    state={

    }

    render(){
        return(
            <div className="back">
                <div ><h1 className="main-title">ECO</h1></div>
                <div ><h2 className="sub-title">CONCIENCIA</h2></div>
                
                <Grid container direction="column" className="form">
                    <Grid item xs={6} sm={4} md={4} className="field">
                    <TextField id="outlined-basic" fullWidth="true" label="Usuario" variant="outlined" />
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={4} className="field">
                    <TextField id="outlined-basic" fullWidth="true" label="Contraseña" variant="outlined" />
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default LoginView ;