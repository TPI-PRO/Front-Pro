import React,{Component}   from 'react';
import { Link } from "react-router-dom";

import {Grid} from '@material-ui/core';
import icono from '../../../assets/icono.svg';
import image from '../../../assets/Consumo/Consumoicono.svg';
import Navbar from '../../../components/NavBar/Navbar';
import './Initcon.css'

import info from '../../../assets/Consumo/Consumoq.svg';

class Initcon extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
 
 
    render(){
        return(
            
            <Grid container direction="row">
                <Grid item xs={1} sm={1} md={1}>
                    <div className="title"><img src={icono} alt="hallo"></img></div>
                    <Navbar/>
                </Grid>

                <Grid item xs={false} sm={0} md={5} align="center">
                    <div className="text">
                        ¿Que quieres aprender hoy?
                    </div>
                    
                    <div className="init_log">
                        <Link  to="/consumo_what">
                            <img src={info} alt="menu"/>
                        </Link>
                    </div>
                    <div className="init_text2">
                        ¿Que?
                    </div>
                </Grid>
                    
                <Grid item xs={11} sm={10} md={6} align="center" >
                    <img src={image} alt="hallo" className="initi"></img>
                </Grid>
            </Grid>
        );
    }
}
 
 
export default Initcon ;