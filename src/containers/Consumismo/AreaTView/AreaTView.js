import React,{Component}   from 'react';
 
import {Grid} from '@material-ui/core';
import icono from '../../../assets/icono.svg';
import Navbar from '../../../components/NavBar/Navbar'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import textil from '../../../assets/Area textil.svg';

import './AreaTView.css'

 
class AreasView extends Component{
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
                            <h3>Textil</h3>
                        </div>
                        <div className="areaT_icon">
                            <PlayArrowIcon color={'disabled'} />    
                        </div>
                    </div>
                </Grid>
                
                <Grid item xs={11} sm={11} md={6} align="center">
                    <div className="areas_img"><img src={textil} alt="hallo"></img></div>
                    <div className="areas-text" >
                        <div className="areas-text_2">
                        Cada año se fabrican 100 mil millones
                        de prendas de ropa, de las cuales la
                        fabricación de una camisa de algodón
                        de 250g consume 2700 litors de agua.
                        No con esto, la moda rápida ha hecho
                        que estas camisas se conviertan en un
                        objeto de usar y tirar.
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
 
 
export default AreasView;