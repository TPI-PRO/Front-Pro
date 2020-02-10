import React,{Component}   from 'react'; 
import './WhatView.css'

/*import Square from '../../components/Square/Square';*/
import Grid from '@material-ui/core/Grid';
import icono from '../../../assets/icono.svg';
import Navbar from '../../../components/NavBar/Navbar'
import Options from '../../../components/Options/Options'




class WhatView extends Component{

    state={

    }

    render(){
        return(
            <Grid container direction="row">
                
                <Grid item xs={1} sm={1} md={1}>
                    <div className="title-nav"><img src={icono} alt="hallo"></img></div>
                    <Navbar/>
                </Grid>

                <Grid item xs={false} sm={0} md={5} align="left">
                    
                    <div className="what-text">
                        <div className="what_title">
                            <h3>QUÉ ES</h3>
                        </div>
                        <div className="what-text_2">
                            Tendencia al consumo excesivo
                            e innecesario de bienes y servicios.
                            Actualmente el ser humano necesita 3
                            planetas para abastecer el ritmo actual
                            de consumo.
                        </div>
                    </div>
                </Grid>
                
                <Grid item xs={11} sm={11} md={6} align="center">
                    <Options/>
                </Grid>
            </Grid>
        );
    }
}

export default WhatView ;