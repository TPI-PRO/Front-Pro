import React,{Component}   from 'react'; 
import './WhatView.css'

/*import Square from '../../components/Square/Square';*/
import Grid from '@material-ui/core/Grid';
import icono from '../../assets/icono.svg';
import Navbar from '../../components/NavBar/Navbar'
import Options from '../../components/Options/Options'




class WhatView extends Component{

    state={

    }

    render(){
        return(
            <Grid container direction="row">
                
                <Grid item xs={1} sm={1} md={1}>
                    <div className="title"><img src={icono} alt="hallo"></img></div>
                    <div className="wrap"><Navbar/></div>
                </Grid>

                <Grid item xs={false} sm={0} md={5} align="left">
                    
                    <div className="text">
                        <div className="title">
                            <h3>QUÉ ES</h3>
                        </div>
                        Satisfacer las necesidades primarias
                        de los seres humanos a través de la
                        utilización de recursos, bienes , servicios
                        y productos.
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