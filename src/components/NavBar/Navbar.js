import React,{Component}   from 'react'; 
import './Navbar.css'

import earth from '../../assets/earth2.svg';
import informacion from '../../assets/icono.svg';
import Grid from '@material-ui/core/Grid';

class NavBar extends Component{

    state={

    }

    render(){
        return(
            <div className="navbar">
                <Grid container direction="column">
                    <Grid item xs={12} className="icon" >
                        <img src={informacion} alt="Aqui no no hay nada" className="imageIcon"/>
                        <p className="textIcon">need image</p>
                    </Grid>
                    <Grid item xs={12} className="icon">
                        <img src={earth} alt="Aqui no no hay nada" className="imageIcon"/>
                        <p className="textIcon">need image</p>
                    </Grid>
                    <Grid item xs={12} className="icon" >
                        <img src={earth} alt="Aqui no no hay nada" className="imageIcon"/>
                        <p className="textIcon">need image</p>
                    </Grid>
                    <Grid item xs={12} className="icon">
                        <img src={earth} alt="Aqui no no hay nada" className="imageIcon"/>
                        <p className="textIcon">need image</p>
                    </Grid>
                    <Grid item xs={12} className="icon" >
                        <img src={earth} alt="Aqui no no hay nada" className="imageIcon"/>
                        <p className="textIcon">need image</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default NavBar;