import React, { Component, PropTypes } from "react";
import './modal.css';

export default function Modal(props) {
    const { children, toggle, active } = props;

    return active && (
            <div className="wrapper">
                <div className="window">
                    <button className="closeBtn" onClick={toggle}>X</button>
                    <div className="cont-photo">{children}</div>
                </div>
            </div>
        )
}

// export default class Modal extends Component {
//     static PropTypes={
//         children: PropTypes.any,
//         onClickOut: PropTypes.func,
//     }
    
//     render(){

//         const { children, toggle, active } = this.props;
//         return(
//             <Portal>
//                 {active && (
//                     <div className="wrapper">
//                         <div className="window">
//                             <button className="closeBtn" onClick={toggle}>X</button>
//                             <div>{children}</div>
//                         </div>
//                     </div>
//                 )}
//             </Portal>
//         )
//     }
// }