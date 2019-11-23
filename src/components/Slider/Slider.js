import React from 'react'; 

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Aux from '../../hoc/Aux';
import consumo from '../../assets/consumo.svg';
import consumismo from '../../assets/consumismo.svg';
import earth from '../../assets/earth2.svg';
import Fab from '@material-ui/core/Fab';
import falsos from '../../assets/falsos.svg';
import Grid from '@material-ui/core/Grid';

import postconsumo from '../../assets/postconsumo.svg';
import responsable from '../../assets/responsable.svg';
import './Slider.css'


const  Image=(props)=>(
   <Aux>
      <Grid container direction="row">
         <Grid item md={2} sm={2}>
            <div className="navbar">
               hallo
            </div>
         </Grid>
         <Grid item md={1} sm={1} className="arrow">
            <Fab color="secondary" size={'small'}>
               <ArrowBackIosIcon/>
            </Fab>
         
         </Grid>
         <Grid item md={8} sm={8}>
            <div className="slider">
               <ul>
                  <li><img src={earth} alt="Aqui no no hay nada"  className="image"/></li>
                  <li><img src={consumo} alt="Aqui no no hay nada" className="image"/></li>
                  <li><img src={consumismo} alt="Aqui no no hay nada" className="image"/></li>
                  <li><img src={responsable} alt="Aqui no no hay nada" className="image"/></li>
                  <li><img src={falsos} alt="Aqui no no hay nada" className="image"/></li>
                  <li><img src={postconsumo} alt="Aqui no no hay nada" className="image"/></li>
               </ul>
            </div>
            
         </Grid>
         <Grid item md={1} sm={1} className="arrow">
            <Fab color="secondary" size={'small'}>
               <ArrowForwardIosIcon/>
            </Fab>   
            
         </Grid>
      </Grid>
      
      
   </Aux>
    
); 

export default  Image;