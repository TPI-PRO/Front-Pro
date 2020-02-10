import React,{Component}   from 'react'; 

/*import Square from '../../components/Square/Square';*/
import Grid from '@material-ui/core/Grid';
import icono from '../../../assets/icono.svg';
import Navbar from '../../../components/NavBar/Navbar'
import Options from '../../../components/OptionsFalsos/Options'




class Whatfalsos extends Component{

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
                        En el punto donde las personas ya han
                        tomado conciencia, el márketing va a tomar
                        partido de esta nueva clase de consumidores
                        y va a optar por resaltar los adjetivos
                        “verdes” para atraer a las personas.
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

export default Whatfalsos ;