import React,{Component}   from 'react';
 
import {Grid} from '@material-ui/core';
import icono from '../../../assets/icono.svg';
import Navbar from '../../../components/NavBar/Navbar'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import tecnologia from '../../../assets/Area tecnología.svg';

import './AreaTEView.css'

 
class AreaTEView extends Component{
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
                            <h3>Tecnología</h3>
                        </div>
                        <div className="areaT_icon">
                            <PlayArrowIcon color={'disabled'} />    
                        </div>
                    </div>
                </Grid>
                
                <Grid item xs={11} sm={11} md={6} align="center">
                    <div className="areas_img"><img src={tecnologia} alt="hallo"></img></div>
                    <div className="areas-text" >
                        <div className="areas-text_2">
                        Las prácticas de la industria tecnológica
                        que, con la obsolescencia programada,
                        promueven la sustitución frente a
                        la reparación, ocasionando el
                        agotamiento de los recursos naturales
                        y toneladas de residuos peligrosos.
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
 
 
export default AreaTEView;