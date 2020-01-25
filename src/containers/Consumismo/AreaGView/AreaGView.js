import React,{Component}   from 'react';
 
import {Grid} from '@material-ui/core';
import icono from '../../../assets/icono.svg';
import Navbar from '../../../components/NavBar/Navbar'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ganaderia from '../../../assets/Area ganadería.svg';

import './AreaGView.css'

 
class AreaGView extends Component{
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
                    
                    <div className="areaT-text">
                        <div className="areaT_title">
                            <h3>AREAS DE CONSUMO</h3>
                        </div>
                        <div className="areaT_subtitle">
                            <h3>Ganadería</h3>
                        </div>
                        <div className="areaT_icon">
                            <PlayArrowIcon color={'disabled'} />    
                        </div>
                    </div>
                </Grid>
                
                <Grid item xs={11} sm={11} md={6} align="center">
                    <div className="areas_img"><img src={ganaderia} alt="hallo"></img></div>
                    <div className="areas-text" >
                        <div className="areas-text_2">
                        La ganadería es responsable de la
                        emisión del 14% de los Gases de Efecto
                        Invernadero y la tala de bosques.
                        Se prevé que el consumo mundial de
                        carne aumente en más de un 75%
                        en 2050, cifra insostenible.
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
 
 
export default AreaGView;