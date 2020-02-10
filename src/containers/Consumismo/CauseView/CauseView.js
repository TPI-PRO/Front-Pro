import React,{Component}   from 'react';
 
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; 
import Fab from '@material-ui/core/Fab';
import {Grid} from '@material-ui/core';
import icono from '../../../assets/icono.svg';
import Navbar from '../../../components/NavBar/Navbar'
import text from './Content'


import './CauseView.css'

class CauseView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            number : 0,
            title :[
                "1. Publicidad",
                "2. Predisposición de usar y tirar",
                "3. Baja calidad de los productos",
                "4. Patologías de los individuos", 
                "5. Cultura",
                "6. Ignorancia", 
            ],
        }
        this.changeState = this.changeState.bind(this)
    }
    
    changeState(){
        if (this.state.number >= 6){ this.setState({ number: 0})}
        else{ this.setState({ number: this.state.number + 1 })}
    }

    render(){
        return(
            <Grid container direction="row">
                
                <Grid item xs={1} sm={1} md={1}>
                    <div className="title-nav"><img src={icono} alt="hallo"></img></div>
                    <Navbar/>
                </Grid>

                <Grid item xs={false} sm={0} md={5} align="left">
                    <div className="cause-text">
                        <div className="cause_title">
                            <h3>CAUSAS</h3>
                        </div>
                        <div className="cause_subtitle">
                            <h3>{this.state.title[this.state.number]}</h3>
                        </div>
                        <div className="cause_text2">
                            <p>{text[this.state.number]}</p>
                        </div>
                        
                        
                    </div>
                </Grid>
                
                <Grid item xs={11} sm={11} md={6} align="center">
                    <div className="cause_video">
                        <video 
                            autoplay 
                            controls 
                            src="../1. Introduction/1. Course Outline.mp4"  width="640" height="480">
                        </video>
                    </div>
                    <div className="cause_icon">
                        <Fab color="primary" >
                            <ChevronRightIcon onClick={this.changeState}/>
                        </Fab>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
 
 
export default CauseView;