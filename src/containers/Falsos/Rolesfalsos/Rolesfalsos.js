import React,{Component}   from 'react'; 
import { Grid } from '@material-ui/core';

import Navbar from '../../../components/NavBar/Navbar';
import icono from '../../../assets/icono.svg';
import flecha from '../../../assets/Falsos/Flecha.svg'

import mydata from './Roles.json'

class Rolesfalsos extends Component{

    constructor(props) {
        super(props)
        this.state = {
            number : 0,
        }
        this.changeState = this.changeState.bind(this)
        this.anotherchangeState = this.anotherchangeState.bind(this)
    }

    changeState(){
        if (this.state.number >= 1){ this.setState({ number: 0})}
        else{ this.setState({ number: this.state.number + 1 })}
    }

    anotherchangeState(){
        if (this.state.number === 0){ this.setState({ number: 1})}
        else{ this.setState({ number: this.state.number - 1 })}
    }

    render(){
        const imagen =require.context('../../../assets/Falsos', true);
        return(
            <Grid container spacing={2}>
            <Grid item xs={0} sm={6} md={1} lg={1} xl={1}>
                <img src={icono} alt="hallo"></img>
                <Navbar/>
            </Grid>
            <Grid container justify="center"  direction="column" xs={12} sm={6} md={5} lg={6} xl={5}>
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
            <Grid container  justify="center" spacing={2} direction="column" xs={12} sm={6} md={5} lg={5} xl={5}>
                <Grid container justify="center">
                    <img src={flecha} alt="Prueba" onClick={this.anotherchangeState} id="rotada" style={{cursor:"pointer"}}></img>
                </Grid>
                <Grid item class="areas" align="center">
                    <img src={imagen(mydata.entradas[this.state.number].imagen)}  alt="Prueba"></img>
                </Grid>
                <Grid container justify="center">
                    <img src={flecha} alt="Prueba"  onClick={this.changeState} style={{cursor:"pointer"}}></img>
                </Grid>
                
            </Grid>
            
         </Grid>
        );
    }
}

export default Rolesfalsos ;