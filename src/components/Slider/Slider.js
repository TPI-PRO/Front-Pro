import React from 'react'; 
import Imagen from '../../assets/earth.svg';
import Logo from '../../assets/logo1.svg'
import './Slider.css'
import Aux from '../../hoc/Aux';

const  Image=(props)=>(
    
   <Aux className="slider">
      <ul>
         <li><img src={Logo} alt="Aqui no no hay nada" className="center"/></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
      </ul>
   </Aux>
    
); 

export default  Image;