import React from 'react'
import Filho from './Filho'

function childrenWithProps(props) { //Função para pegar os elementos filhos
    {/* Importante - Utilizando as linhas abaixo dentro de uma classe é preciso colocar this.props.children */}

    return React.Children.map(props.children, child => { //props.children = filhos passados pelo index.js
        return React.cloneElement(child, { /* Clona o elemento filho,e consegue adicionar mais propriedades*/
            ...props, ...child.props  // apos pegar propriedades do pai ...child.props pega as propriedades do filho (Ou seja, os atributos que o filho ja tiver, não seram substituidos pelos atributos do pai)
        })
    })
}

//Função para renderizar na pagina
export default props => 
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {childrenWithProps(props)}
    </ul>

    <ul>
        {/*Exemplos de chamadas de filhos*/}
        {/* <Filho nome="Pedro" sobrenome={props.sobrenome} /> */}
        {/*OU*/}
        {/* <Filho {...props} /> ...props = passando todas as propriedades do pai para o filho */}
        {/* <Filho {...props} nome = "Carla" /> Alterando a propriedade nome apos pegar do pai */}
    </ul>
</div>