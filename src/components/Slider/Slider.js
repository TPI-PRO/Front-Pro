import React,{Component} from 'react'; 
import './Slider.css'

import consumo from '../../assets/consumo2.svg';
import consumismo from '../../assets/consumismo2.svg';
import earth from '../../assets/earth5.svg';
import Fab from '@material-ui/core/Fab';
import falsos from '../../assets/falsos2.svg';
import { Grid } from '@material-ui/core';
import { Link,withRouter } from 'react-router-dom';
import postconsumo from '../../assets/postconsumo2.svg';
import responsable from '../../assets/responsable2.svg';
import SpaIcon from '@material-ui/icons/Spa';



class Slider extends Component{
   constructor(props) {
      super(props)
      this.state = {
      }
      this.change = this.change.bind(this);
   }
   change(){
      console.log("hallo")
      this.props.history.push("/")
   }

   render(){
      return (
         <div className="container">
            <input type="radio" name="images" id="i1" checked/>
            <input type="radio" name="images" id="i2"/>
            <input type="radio" name="images" id="i3"/>
            <input type="radio" name="images" id="i4"/>
            <input type="radio" name="images" id="i5"/>
            <input type="radio" name="images" id="i6"/>
            
            <Grid item className="slide-img" id="one">
               <img src={earth} alt="two"></img>
            </Grid>
            
            <Grid item className="slide-img" id="two" direction={"column"}>
               <Grid item>
                  <div className="button">
                     <Fab color="inherit" size={'small'}>
                        <SpaIcon color="primary" onClick={this.click}/>
                     </Fab>
                  </div>
               </Grid>
               <Grid item>
                  <img src={consumo} alt="two"></img>
               </Grid>
            </Grid>

            <Grid item className="slide-img" id="three">
               <Grid item>
                  <div className="button">
                     <Fab color="inherit" size={'small'}>
                        <SpaIcon color="primary" onClick={this.click}/>
                     </Fab>
                  </div>
               </Grid>
               <Grid item>
                  <img src={consumismo} alt="two"></img>
               </Grid>
            </Grid>
            
            <Grid item className="slide-img" id="four">
               <Grid item>
                  <div className="button">
                     <Fab color="inherit" size={'small'}>
                        <SpaIcon color="primary" onClick={this.click}/>
                     </Fab>
                  </div>
               </Grid>
               <Grid item>
                  <img src={falsos} alt="two"></img>
               </Grid>
            </Grid>

            <Grid item className="slide-img" id="five">
               <Grid item>
                  <div className="button">
                     <Fab color="inherit" size={'small'}>
                        <SpaIcon color="primary" onClick={this.click}/>
                     </Fab>
                  </div>
               </Grid>
               <Grid item>
                  <img src={responsable} alt="two"></img>
               </Grid>
            </Grid>
            
            <Grid item className="slide-img" id="six">
               <Grid item>
                  <div className="button">
                     <Fab color="inherit" size={'small'}>
                        <SpaIcon color="primary" onClick={this.click}/>
                     </Fab>
                  </div>
               </Grid>
               <Grid item>
                  <img src={postconsumo} alt="two"></img>
               </Grid>
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