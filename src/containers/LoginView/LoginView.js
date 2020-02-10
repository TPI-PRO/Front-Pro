import React,{Component}   from 'react'; 
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
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
                
                <Grid container direction="column" spacing={5}>
                <Grid container direction="column" className="form">
                    <Grid item xs={6} sm={4} md={4} className="field">
                    <TextField id="outlined-basic" fullWidth="true" label="Usuario" variant="outlined" />
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={4} className="field">
                    <TextField id="outlined-basic" fullWidth="true" label="Contraseña" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid item lg={5}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Link  to="/login">
                                <Button variant="contained" color="primary">Ingresar</Button>
                            </Link> 
                        </Grid>
                        <Grid item>
                            <Link  to="/register">
                                <Button variant="contained" color="secondary">Registrar</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                </Grid>
                
                
            </div>
        );
    }
}

export default LoginView ;