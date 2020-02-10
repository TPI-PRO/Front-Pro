import React,{Component}   from 'react'; 

import { Grid } from '@material-ui/core';
import icono from '../../../assets/icono.svg';
import Navbar from '../../../components/NavBar/Navbar';
import flecha from '../../../assets/Consumo/Flecha.svg'

import mydata from './tdata.json'
import './Types.css'

class Types extends Component{

    constructor(props) {
        super(props)
        this.state = {
            number : 0,
        }
        this.changeState = this.changeState.bind(this)
        this.anotherchangeState = this.anotherchangeState.bind(this)
    }

    changeState(){
        if (this.state.number >= 3){ this.setState({ number: 0})}
        else{ this.setState({ number: this.state.number + 1 })}
    }

    anotherchangeState(){
        if (this.state.number === 0){ this.setState({ number: 3})}
        else{ this.setState({ number: this.state.number - 1 })}
    }

    render(){
        const imagen =require.context('../../../assets/Consumo', true);
        return(
            <Grid container>
                <Grid item xs={0} sm={1} md={1} lg={1} xl={1}>
                    <div className="title"><img src={icono} alt="hallo"></img></div>
                    <Navbar/>
                </Grid>
                <Grid container direction="column" xs={12} sm={11} md={11} lg={11} xl={11}>
                    <Grid container justify="center">
                        <h3>TIPOS DE COMPRA</h3>
                    </Grid>
                    <Grid container  justify="center">
                        <Grid container xs={3} lg={3} justify="center">
                            <img src={flecha} alt="Prueba" id="rotada1" onClick={this.anotherchangeState} style={{cursor:"pointer"}}></img>
                        </Grid>
                        <Grid item>
                            <img src={imagen(mydata.entradas[this.state.number].imagen)}  alt="Prueba"></img>
                        </Grid>
                        <Grid container xs={3} lg={3} justify="center">
                            <img src={flecha} alt="Prueba" onClick={this.anotherchangeState} id="rotada2" style={{cursor:"pointer"}}></img>
                        </Grid>
                    </Grid>
                    
                    <Grid container justify="center">
                    <h4>{mydata.entradas[this.state.number].titulo}</h4>
                    </Grid>
                    <Grid container justify="center">
                    {mydata.entradas[this.state.number].parrafo}
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

export default Types ;