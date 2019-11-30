import React from 'react'; 
import Imagen from '../../assets/earth.svg';
import Logo from '../../assets/logo1.svg'
import './Image.css'


const  Image=(props)=>(
    
   <div>
      <img src={Logo} alt="Aqui no no hay nada" className="center"/>
      <div className="container">
         <img src={Imagen} alt="Aqui no no hay nada" className="earth"/>
      </div>
   </div>
    
); 

export default  Image;