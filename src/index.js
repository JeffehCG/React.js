import React from 'react' //Importando react
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro' //Importando componente Primeiro (arquivo jsx )(Componente sempre deve ser importado com a primeira letra maiuscula 'Primeiro')

import BomDia from './componentes/BomDia' //importanco componente Bom dia

import Multi, {BoaNoite} from './componentes/Multiplos' //Importando multiplos componentes de um arquivo

import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//Maneiras chamar componentes para serem utilizados, e colocados na pagina

// --colocando diretamente --------------------------------------------------------------------------------------------------------------
// const elemento = <h1>React</h1>
// ReactDOM.render(elemento, document.getElementById('root')) // Redenrizando primeiro elemento na pagina (root é o indice de uma div no arquivo principal (public/index.html))


//Chamando componente sem parametro------------------------------------------------------------------------------------------------------
// ReactDOM.render(<Primeiro/>, document.getElementById('root'))


//Chamando componente com parametro------------------------------------------------------------------------------------------------------
// ReactDOM.render(<BomDia nome = "Jefferson" emails = {22}/>, document.getElementById('root')) // nome = "Jefferson" = passando parametro pro componente


//Chamando multiplos componentes----------------------------------------------------------------------------------------------------------
// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana"/>
//         <BoaNoite nome= "Bia"/>
//     </div>
//     , document.getElementById('root'))


//Usando componente de classe--------------------------------------------------------------------------------------------------------------
// ReactDOM.render(
//     <div>
//         <Saudacao tipo = "Bom dia" nome="João"/>
//     </div>
//     , document.getElementById('root'))


//Usando componete Pai e Filho (Herança)
ReactDOM.render(
    <div>
        <Pai nome= "Paulo" sobrenome="Silva">
            {/* Passando os componentes filhos aqui */}
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
        </Pai>
    </div>
    , document.getElementById('root'))