import React from "react";

// class Titles extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Weather</h1>
//                 <p>Find out temperature, conditions, and moar!</p>
//             </div>
//         );
//     }
// }


const Titles = () => (
    <div>
        <h1 className="title-container__title">Weather</h1>
        <h3 className="title-container__subtitle">Find out temperature, conditions, and moar</h3>
    </div>
);


export default Titles;