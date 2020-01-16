import React,{Component}   from 'react'; 
import './Navbar.css'

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Exit from '@material-ui/icons/ExitToApp';

import Fab from '@material-ui/core/Fab';

import Menu from '../../assets/menu2.svg';
import Blog from '../../assets/blog2.svg';
import Nosotros from '../../assets/nosotros2.svg';
import Informacion from '../../assets/informacion2.svg';

import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';


class NavBar extends Component{

    constructor(props) {
        super(props)
        this.change = this.change.bind(this);
    }
    
    change(){
        console.log("hallo")
        this.props.history.push("/slide")
    }

    render(){
        return(
            <div className="navbar">
                 
                <Grid container direction="column">
                    <Grid item xs={12} className="icon" align="center">
                        <Fab color="secondary" size={'large'}>
                            <AccountBoxIcon fontSize={'large'} />    
                        </Fab>
                        <p className="textIcon">Mi perfil</p>
                    </Grid>

                    <Grid item xs={12} className="icon" align="center">
                        <Fab color="secondary" size={'large'} onClick={this.change}>
                            <img src={Menu} />
                        </Fab>
                        <p className="textIcon">Menu</p>
                    </Grid>

                    <Grid item xs={12} className="icon" align="center">
                        <Fab color="secondary" size={'large'}>
                            <img src={Blog}/>      
                        </Fab>
                        <p className="textIcon">Blog</p>
                    </Grid>

                    <Grid item xs={12} className="icon" align="center">
                        <Fab color="secondary" size={'large'}>
                            <img src={Nosotros}/>      
                        </Fab>
                        <p className="textIcon">Actividades</p>
                    </Grid>

                    <Grid item xs={12} className="icon" align="center">
                        <Fab color="secondary" size={'large'}>
                           <img src={Informacion} />
                        </Fab>
                        <p className="textIcon">Salir</p>
                    </Grid>

                    <Grid item xs={12} className="icon" align="center">
                        <Fab color="secondary" size={'large'}>
                           <Exit/>
                        </Fab>
                        <p className="textIcon">Salir</p>
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}

export default withRouter(NavBar);