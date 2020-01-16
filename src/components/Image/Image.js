import React from 'react'; 
import Imagen from '../../assets/earth3.svg';
import Logo from '../../assets/icono2.svg'

import Grid from '@material-ui/core/Grid';
import './Image.css'


const  Image=(props)=>(
    
   <div>
      <Grid container>
         <Grid item xs={6}>
            <img src={Logo} alt="Aqui no no hay nada" className="center"/>
        </Grid>
        <Grid item xs={6}>
            <img src={Imagen} alt="Aqui no no hay nada" className="earth"/> 
        </Grid>
      </Grid>
   </div>
    
); 

export default  Image;