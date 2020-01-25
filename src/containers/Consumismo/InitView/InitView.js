import React,{Component}   from 'react';

import {Grid} from '@material-ui/core';
import icono from '../../../assets/icono.svg';
import image from '../../../assets/ConsumismoN.svg'
import Navbar from '../../../components/NavBar/Navbar'
 

import info from '../../../assets/informacion2.svg';
import './InitView.css'
class InitView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
 
 
    render(){
        return(
            
            <Grid container direction="row">
                <Grid item xs={1} sm={1} md={1}>
                    <div className="title"><img src={icono} alt="hallo"></img></div>
                    <div className="wrap"><Navbar/></div>
                </Grid>

                <Grid item xs={false} sm={0} md={5} align="center">
                    <div className="text">
                        ¿Que quieres aprender hoy?
                    </div>
                    
                    <div className="init_button">
                        <img src={info} alt="menu" className="init_logo"/>
                    </div>
                    <div className="init_text2">
                        ¿Que?
                    </div>
                </Grid>
                    
                <Grid item xs={11} sm={10} md={6} align="center" >
                    
                    <div className="init_image">
                        <img src={image} alt="hallo"></img>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
 
 
export default InitView ;