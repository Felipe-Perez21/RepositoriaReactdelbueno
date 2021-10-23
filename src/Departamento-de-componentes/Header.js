import React,{Component} from "react";
import '../App.css';
import logo from '../logo.jpg'

class Header extends Component{
    render(){
        return(
            <div className = "App-header">
               <img  src = {logo} alt = "Sin imagen x.x"/>
            </div> 
        );
    }
} 

export default Header;