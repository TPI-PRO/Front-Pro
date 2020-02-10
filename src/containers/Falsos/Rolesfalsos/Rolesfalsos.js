import React,{Component}   from 'react'; 
import { Grid } from '@material-ui/core';

import Navbar from '../../../components/NavBar/Navbar';
import icono from '../../../assets/icono.svg';
import iconoc from '../../../assets/Consumo/Consumo.svg';
import flecha from '../../../assets/Consumo/Flecha.svg'

import mydata from './Roles.json'

class Rolesfalsos extends Component{

    constructor(props) {
        super(props)
        this.state = {
            number : 0,
        }
        this.changeState = this.changeState.bind(this)
    }

    changeState(){
        if (this.state.number >= 1){ this.setState({ number: 0})}
        else{ this.setState({ number: this.state.number + 1 })}
    }

    render(){
        const imagen =require.context('../../../assets/Falsos', true);
        return(
            <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  >
                <div className="title-nav"><img src={icono} alt="hallo"></img></div>
             </Grid>
             <Grid container xs={0} sm={0} md={6} lg={6} xl={6} justify="flex-end">
                <div className="title-nav"><img src={iconoc} alt="hallo"></img></div>
             </Grid>
            <Grid item xs={0} sm={6} md={1} lg={1} xl={1}>
                <Navbar/>
            </Grid>
            <Grid container direction="column" xs={12} sm={6} md={5} lg={6} xl={5}>
                <Grid container justify="center">
                        <h3>Roles</h3>
                </Grid>
                <Grid container justify="center">
                        <h4>{mydata.entradas[this.state.number].titulo}</h4>
                </Grid>
                <Grid item>
                    <div className="what-con">
                    {mydata.entradas[this.state.number].parrafo}
                    </div>
                </Grid>                    
            </Grid>
            <Grid container spacing={2} direction="column" xs={12} sm={6} md={5} lg={5} xl={5}>
                <Grid container justify="center">
                    <img src={flecha} alt="Prueba" onClick={this.anotherchangeState} style={{cursor:"pointer"}}></img>
                </Grid>
                <Grid item >
                    <img src={imagen(mydata.entradas[this.state.number].imagen)} alt="Prueba"></img>
                </Grid>
                <Grid container justify="center">
                    <img src={flecha} alt="Prueba" id="rotada" onClick={this.changeState}></img>
                </Grid>
                
            </Grid>
            
         </Grid>
        );
    }
}

export default Rolesfalsos ;