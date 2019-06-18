import React, {Fragment} from 'react' //importando Fragment junto para envolver elementos html


 //Para passar dois elemento como abaixo, é preciso de um compnente envolvendo os dois 

 //Envolvendo elementos com array
export default props => // função que deverar receber um parametro
    [ 
        <h1 key = 'h1'>Bom dia {props.nome}</h1>,
        <h3 key = 'h3'>Você tem {props.emails} emails pendentes</h3>,
        <h2 key = 'h2'>Até breve!</h2>
    ]


//Envolvendo elementos com Fragment
//export default props =>
//  <Fragment>
//     <h1>Bom dia {props.nome}</h1>
//     <h3>Você tem {props.emails} emails pendentes</h3>
//     <h2>Até breve!</h2>
// </Fragment>

//Envolvendo elementos com div
//export default props =>
//  <div>
//     <h1>Bom dia {props.nome}</h1>
//     <h3>Você tem {props.emails} emails pendentes</h3>
//     <h2>Até breve!</h2>
// </div>