import React from 'react'; 
import Imagen from '../../assets/earth.svg';
import Logo from '../../assets/logo1.svg'
import './Image.css'
import Aux from '../../hoc/Aux';

const  Image=(props)=>(
    
   <Aux>
      <img src={Logo} alt="Aqui no no hay nada" className="center"/>
      <div className="container">
         <img src={Imagen} alt="Aqui no no hay nada" className="earth"/>
      </div>
   </Aux>
    
); 

export default  Image;