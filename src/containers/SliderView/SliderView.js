import React,{Component}   from 'react'; 
import './SliderView.css'

import Square from '../../components/Square/Square';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../components/NavBar/Navbar'
import Slider from '../../components/Slider/Slider';




class SliderView extends Component{

    state={

    }

    render(){
        return(
            <Grid container direction="row">
                <Grid item md={1} sm={1}>
                    <div className="wrap"><Navbar/></div>
                </Grid>

                <Grid item md={5} sm={5} align="center">
                    <div className="text">
                        <h3>BIENVENIDO</h3>
                        ¿Que quieres aprender hoy?
                    </div>
                </Grid>
                
                <Grid item md={6} sm={6} align="center"><Slider/></Grid>
            </Grid>
        );
    }
}

export default SliderView ;
