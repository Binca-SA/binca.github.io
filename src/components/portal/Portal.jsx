import React, { Component } from "react";
import ReactDOM from "react-dom";


const portalRoot = document.getElementById('portal');
//no exporta ni importa nada, simplemente es funcional//
export default  class  Portal extends Component {

    constructor(){
        super();
        this.el=document.createElement('div');
    }

    componentDidMount = ()=>{
        portalRoot.appendChild(this.el);
    }
    
    componentWillUnmount = ()=>{
        portalRoot.removeChild(this.el);
    }

    render(){
        const { children } = this.props;
        //aqui abajo le decimos q queremos renderizar children dentro de el//
        return ReactDOM.createPortal(children, this.el)
    }

}


//NOTAS: children es el contenido q esta detro del componente//