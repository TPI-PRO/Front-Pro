import React,{Component}   from 'react';
import './HomeView.css'
 
 
class HomeView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
 
 
    render(){
        return(
            <div className="home">
                <div><h1 className="home-title">ECO</h1></div>
                <div><h2 className="home-stitle">CONCIENCIA</h2></div>
            </div>
        );
    }
}
 
 
export default HomeView ;