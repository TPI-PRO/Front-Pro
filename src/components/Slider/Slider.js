import React,{Component} from 'react'; 
import './Slider.css'

import consumo from '../../assets/ConsumoN.svg';
import consumismo from '../../assets/ConsumismoN.svg';
import earth from '../../assets/earth5.svg';

import falsos from '../../assets/FalsosN.svg';
import { Grid } from '@material-ui/core';
//import { Link,withRouter } from 'react-router-dom';
import postconsumo from '../../assets/Post consumoN.svg';
import responsable from '../../assets/HábitosN.svg';




class Slider extends Component{
   constructor(props) {
      super(props)
      this.state = {
      }
      this.change = this.change.bind(this);
   }

   change(){this.props.history.push("/")}

   render(){
      return (
         <div className="container">
            <input type="radio" name="images" id="i1" checked/>
            <input type="radio" name="images" id="i2"/>
            <input type="radio" name="images" id="i3"/>
            <input type="radio" name="images" id="i4"/>
            <input type="radio" name="images" id="i5" />
            <input type="radio" name="images" id="i6"/>
            
            <Grid item className="slide-img" id="one">
               <img src={earth} alt="two"></img>
            </Grid>
            
            <Grid item className="slide-img" id="two" direction={"column"}>
               <img src={consumo} alt="two"></img>
            </Grid>

            <Grid item className="slide-img" id="three">
               
               <Grid item>
                  <img src={consumismo} alt="two"></img>
               </Grid>
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
   }
   
}

export default  Slider;