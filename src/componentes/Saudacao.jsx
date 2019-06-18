//Componentes de classe
import React,{Component} from 'react'

export default class Saudacao extends Component { //exportando por padrao a classe saudação 
    //Importante (props = são elementos só de leitura, não podem ser alterados
    //Ja os atributos do state são alteraveis)
    
    state = {
        tipo: this.props.tipo, //Pegando os valores iniciais pelos parametros enviados pelo index
        nome: this.props.nome
    }

    constructor(props){//Função construtora
        super(props) //super manda o props para super classe, no casso o Component

        this.setTipo = this.setTipo.bind(this) //nessas duas linhas, esta fazendo com que dentro das funções o this sempre aponte para o Objeto atual, e não para o Global
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e) { //Função para alterar o valor tipo do state, que sera chamada pelo evento no input
        this.setState({tipo: e.target.value}) //Mudando o atributo tipo do status para o valor do elemento (no caso o input)
    }

    setNome(e){
        this.setState({nome: e.target.value})
    }

    render() {//Função responsavel por renderizar o componente na pagina
        const {tipo, nome} = this.state //this se refere a instancia atual, pegando os valores do atributo states acima
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" placeholder = "Tipo..." value = {tipo} onChange={this.setTipo}/>  {/* essa chamada de função so vai funcionar se dentro do constructor a função estaja sendo apontada pelo bind(this)*/ }
                <input type="text" placeholder = "Nome..." value = {nome} onChange={e => this.setNome(e)}/> {/* Ja essa chamada funciona mesmo sem o bind(this) pois dentro da aron function this sempre aponta para o escopo atual */}
            </div> //Evento onChange é chamado quando o elemento for alterado, e em seguida chama a função
        )
    }
}