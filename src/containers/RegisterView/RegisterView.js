import React,{Component}   from 'react';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';
import earth from '../../assets/earth2.svg'; 
import {TextField,MenuItem,Select} from '@material-ui/core';
import './RegisterView.css'

class RegisterView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
 
 
    render(){
        return(
            <Grid container direction="row">
            
                <Grid item xs={5} sm={5} md={5} className="image_reg">
                    <img height="720" width="520px" src={earth} alt="earth"/>
                </Grid>
            
                <Grid item xs={7} sm={7} md={7} >
                    <Grid container direction="column" className="form_reg" >
                        <Grid item xs={8} sm={8} md={8} className="field_reg" >
                            <h1>REGISTRO</h1>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} className="field_reg">
                            <TextField id="outlined-basic" fullWidth="true" label="Nombres" variant="outlined" />
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} className="field_reg">
                            <TextField id="outlined-basic" fullWidth="true" label="Apellidos" variant="outlined" />
                        </Grid>
                        
                        <Grid item xs={9} sm={9} md={9} className="field_reg">
                            <TextField id="outlined-basic" fullWidth="true" label="Email" variant="outlined" />
                        </Grid>

                        <Grid item xs={9} sm={10} md={9} className="field_reg">
                            <TextField id="outlined-basic" fullWidth="true" label="Password" variant="outlined" />
                        </Grid>

                        <Grid item xs={9} sm={10} md={9} className="field_reg">
                        <Select id="outlined-basic" fullWidth="true" variant="outlined" >
                             <MenuItem value="Profesor">Profesor</MenuItem>
                            <MenuItem value="Coordinador">Coordinador</MenuItem>
                        </Select>
                        </Grid>

                        <Grid container className="field_reg">
                            <Grid item xs={4} md={4} align="center">
                                 <Link  to="/login">
                                    <Button variant="contained" color="secondary">Ingresar</Button>
                                 </Link> 
                            </Grid>
                            <Grid  item xs={4} md={4}>
                                    <Button variant="contained" color="primary">Registrar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
           
            </Grid>
        );
    }
}
 
 
export default RegisterView ;