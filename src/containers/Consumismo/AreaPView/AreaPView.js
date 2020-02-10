import React,{Component}   from 'react';
 
import {Grid} from '@material-ui/core';
import icono from '../../../assets/icono.svg';
import Navbar from '../../../components/NavBar/Navbar'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import plasticos from '../../../assets/Area plástico.svg';

import './AreaPView.css'

 
class AreaPView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
 
 
    render(){
        return(
            <Grid container direction="row">
                
                <Grid item xs={1} sm={1} md={1}>
                    <div className="title-nav"><img src={icono} alt="hallo"></img></div>
                    <Navbar/>
                </Grid>

                <Grid item xs={false} sm={0} md={5} align="left">
                    
                    <div className="areaT-text">
                        <div className="areaT_title">
                            <h3>AREAS DE CONSUMO</h3>
                        </div>
                        <div className="areaT_subtitle">
                            <h3>Plásticos</h3>
                        </div>
                        <div className="areaT_icon">
                            <PlayArrowIcon color={'disabled'} />    
                        </div>
                    </div>
                </Grid>
                
                <Grid item xs={11} sm={11} md={6} align="center">
                    <div className="areas_img"><img src={plasticos} alt="hallo"></img></div>
                    <div className="areas-text" >
                        <div className="areas-text_2">
                        A nivel global hasta 12 millones de
                        toneladas de plástico llegan a los
                        océanos los cuales son de un solo uso.
                        Se han observado más de 1.300
                        especies marinas afectadas.
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
 
 
export default AreaPView;