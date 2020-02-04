import React,{Component}   from 'react';
import {Link} from "react-router-dom";

import {Grid} from '@material-ui/core';
import icono from '../../../assets/icono.svg';
import Navbar from '../../../components/NavBar/Navbar'

import './ProblemView.css'

 
 
class ProblemView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
 
 
    render(){
        return(
            <Grid container direction="row">
                
                <Grid item xs={1} sm={1} md={1}>
                    <div className="title-nav"><img src={icono} alt="hallo"></img></div>
                    <div className="wrap"><Navbar/></div>
                </Grid>

                <Grid item xs={false} sm={0} md={5} align="left">
                    
                    <div className="what-text">
                        <div className="what_title">
                            <h3>Problemáticas</h3>
                        </div>
                        <div className="problem-text_2">
                            Nuestra sociedad está envuelta, más que
                            en el consumo, en el “consumismo”que nos
                            empuja a adquirir más cosas de las necesarias.
                            Esta tendencia, de la que depende en gran
                            medida el actual sistema económico, tiene
                            graves consecuencias para la salud del
                            planeta y la nuestra.
                        </div>
                    </div>
                </Grid>
                
                <Grid item xs={11} sm={11} md={6} align="center">
                    <Grid container direction={"column"} className="containerOpt" align="left">
                        <Grid item xs={4} md={4} className="square" align="center">
                            <div id="halle">
                                <Link to="consumismo_areaT" style={{ textDecoration: 'none' }}>
                                    <text id="button">Areas</text>
                                 </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
 
 
export default ProblemView ;