import React from 'react'; 
import './Slider.css'

import consumo from '../../assets/consumo2.svg';
import consumismo from '../../assets/consumismo2.svg';
import earth from '../../assets/earth5.svg';
import falsos from '../../assets/falsos2.svg';
import postconsumo from '../../assets/postconsumo2.svg';
import responsable from '../../assets/responsable2.svg';
import { Grid } from '@material-ui/core';



const  Image=(props)=>(
   <div className="container">
      
      <input type="radio" name="images" id="i1" checked/>
      <input type="radio" name="images" id="i2"/>
      <input type="radio" name="images" id="i3"/>
      <input type="radio" name="images" id="i4"/>
      <input type="radio" name="images" id="i5"/>
      <input type="radio" name="images" id="i6"/>
      
      <Grid item className="slide-img" id="one">
         <img src={earth} alt="one"></img>
      </Grid>
      
      <Grid item className="slide-img" id="two">
         <img src={consumo} alt="two"></img>
      </Grid>

      <Grid item className="slide-img" id="three">
         <img src={consumismo} alt="two"></img>
      </Grid>
      
      <Grid item className="slide-img" id="four">
         <img src={falsos} alt="two"></img>
      </Grid>

      <Grid item className="slide-img" id="five">
         <img src={responsable} alt="two"></img>
      </Grid>
      
      <Grid item className="slide-img" id="six">
         <img src={postconsumo} alt="two"></img>
      </Grid>

      <div className="nav">
         <label className="dots" id="dot1" for="i1"></label>
         <label className="dots" id="dot2" for="i2"></label>
         <label className="dots" id="dot3" for="i3"></label>
         <label className="dots" id="dot4" for="i4"></label>
         <label className="dots" id="dot5" for="i5"></label>
         <label className="dots" id="dot6" for="i6"></label>
      </div>
      
   </div>
); 

export default  Image;