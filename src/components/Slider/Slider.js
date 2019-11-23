import React from 'react'; 

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Aux from '../../hoc/Aux';
import BeenhereIcon from '@material-ui/icons/Beenhere';
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
         <Grid item md={1} sm={1}>
            <div className="wrap">
               <div className="navbar">
                  <Grid container direction="column">
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
            </div>
            
         </Grid>

         <Grid item md={5} sm={5} className="text">
            <h3>¿Que quieres aprender hoy?</h3>
            <Fab color="secondary" size={'small'}>
            </Fab>
         </Grid>
         
         <Grid item md={5} sm={5}>
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
         </Grid>
      </Grid>
      
      
   </Aux>
    
); 

export default  Image;