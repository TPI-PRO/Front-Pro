import React,{Component}   from 'react'; 
import './Navbar.css'

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import earth from '../../assets/earth2.svg';
import Fab from '@material-ui/core/Fab';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

import Grid from '@material-ui/core/Grid';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
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
                            <BlurCircularIcon fontSize={'large'} />        
                        </Fab>
                        <p className="textIcon">Menu</p>
                    </Grid>

                    <Grid item xs={12} className="icon" align="center">
                        <Fab color="secondary" size={'large'}>
                            <MenuBookIcon fontSize={'large'}/>        
                        </Fab>
                        <p className="textIcon">Blog</p>
                    </Grid>

                    <Grid item xs={12} className="icon" align="center">
                        <Fab color="secondary" size={'large'}>
                            <SupervisorAccountIcon fontSize={'large'}/>        
                        </Fab>
                        <p className="textIcon">Sobre Nosotros</p>
                    </Grid>


                    <Grid item xs={12} className="icon" align="center">
                        <Fab color="secondary" size={'large'}>
                            <HelpOutlineOutlinedIcon fontSize={'large'}/>        
                        </Fab>
                        <p className="textIcon">informacion</p>
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}

export default withRouter(NavBar);