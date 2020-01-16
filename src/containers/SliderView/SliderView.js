import React,{Component}   from 'react'; 
import './SliderView.css'

/*import Square from '../../components/Square/Square';*/
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import icono from '../../assets/icono.svg';
import Navbar from '../../components/NavBar/Navbar'
import Slider from '../../components/Slider/Slider';
import SpaIcon from '@material-ui/icons/Spa';




class SliderView extends Component{

    constructor(props) {
        super(props)
        this.state = {
        }
        this.change = this.change.bind(this);
    }
    change(){
        console.log("hallo")
        this.props.history.push("/what")
    }

    render(){
        return(
            <Grid container direction="row">
                <Grid item xs={1} sm={1} md={1}>
                    <div className="title"><img src={icono} alt="hallo"></img></div>
                    <div className="wrap"><Navbar/></div>
                </Grid>

                <Grid item xs={false} sm={0} md={5} align="center">
                    <div className="text">
                        <h3>BIENVENIDO</h3>
                        ¿Que quieres aprender hoy?
                    </div>
                </Grid>
                    
                <Grid item xs={11} sm={10} md={6} align="center" >
                    <div className="button">
                        <Fab color="inherit" size={'small'}>
                            <SpaIcon color="primary" onClick={this.change}/>
                        </Fab>
                    </div>
                    <Slider/>
                </Grid>
            </Grid>
        );
    }
}

export default SliderView ;
