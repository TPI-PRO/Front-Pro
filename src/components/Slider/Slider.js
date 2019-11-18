import React from 'react'; 
import earth from '../../assets/earth2.svg';
import consumo from '../../assets/consumo.svg';
import consumismo from '../../assets/consumismo.svg';
import responsable from '../../assets/responsable.svg';
import falsos from '../../assets/falsos.svg';
import postconsumo from '../../assets/postconsumo.svg';
import './Slider.css'
import Aux from '../../hoc/Aux';

const  Image=(props)=>(
    
   <Aux>
      <div className="slider">
         <ul>
            <li><img src={earth} alt="Aqui no no hay nada" width="660" height="660" className="center"/></li>
            <li><img src={consumo} alt="Aqui no no hay nada" width="360" height="360" className="center"/></li>
            <li><img src={consumismo} alt="Aqui no no hay nada" width="360" height="360" className="center"/></li>
            <li><img src={responsable} alt="Aqui no no hay nada" width="360" height="360" className="center"/></li>
            <li><img src={falsos} alt="Aqui no no hay nada" width="360" height="360" className="center"/></li>
            <li><img src={postconsumo} alt="Aqui no no hay nada" width="360" height="360" className="center"/></li>
         </ul>
      </div>
      
   </Aux>
    
); 

export default  Image;