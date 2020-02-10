import React,{Component} from 'react'; 
import { Link } from "react-router-dom";

import './Slider.css'
import { Grid } from '@material-ui/core';

import mydata from './Slider.json'



class Slider extends Component{
   constructor(props) {
      super(props)
      this.state = {
         number:0,
      }
      this.change = this.change.bind(this);
   }

   change(index){
     this.setState({number:index})
   }

   render(){
      const imagen =require.context('../../assets/General', true);
      return (
         <Grid container direction="column">
            <Grid item className="slide-img">
               <Link to={mydata.entradas[this.state.number].enlace}>
               <img src={imagen(mydata.entradas[this.state.number].imagen)}  alt="Prueba"></img>
               </Link> 
            </Grid>
            <Grid container spacing={1} justify="center">
               <Grid item >
                  <span class="dot"  onClick={()=>this.change(0)}></span>
               </Grid>
               <Grid item>
                  <span class="dot"  onClick={()=>this.change(1)}></span>
               </Grid>
               <Grid item >
                  <span class="dot"  onClick={()=>this.change(2)}></span>
               </Grid>
               <Grid item >
                  <span class="dot"  onClick={()=>this.change(3)}></span>
               </Grid>
               <Grid item>
                  <span class="dot"  onClick={()=>this.change(4)}></span>
               </Grid>
               <Grid item>
                  <span class="dot"  onClick={()=>this.change(5)}></span>
               </Grid>
            </Grid>
            

         </Grid>
         
      );
   }
   
}

export default  Slider;