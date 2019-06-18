import React from 'react'

//Quando se usa export default significa que você ira passar uma função sem nome
//ou seja, quando o componente for importado ira automaticamente chamar a função no default

// Criando multiplos componentes em um unico arquivo

export const BoaTarde = props => <h1>Boa Tarde {props.nome}</h1>

export const BoaNoite = props => <h1>Boa Noite {props.nome}</h1>

//Exportando apenas um compenente como default
// export default BoaTarde

//exportando multiplos componentes como default
export default {BoaTarde,BoaNoite}