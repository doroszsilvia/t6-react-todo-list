import React from 'react' 
import './input.css'

class Input extends React.Component {    //  state é herdado do React.Component  // class é de JS // Props sao propriedades 
    constructor(props){                     // input tem 2 estados, habilidado ou n habilitado  // state é um Json
        super(props)
        this.state={ message : null}         //objeto recebe mesmo que props, guarda estado clicado ou nao clicado...
    }                                       // props sao os modelos state é a condiçao de cada coisa atual ex. propos camisa m azul e state camisa m azum suja
    hasError = () => {
        if(this.state.message == null || this.state.message !== ''){
            return true
        }else{
            return false
        }
    }

    handleChange = (e) => {             
        const value = e.target.value.trim()   
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
        let message = ''

        // console.log('hello onChange',value)
        if(this.props.required && value.trim() === ''){
            message ='Campo Obrigatório'
        }else if(value && this.props.minLength && value.length < (this.props.minLength)){
            message = `Digite pelo menos ${this.props.minLength} caracteres`
        }else if(this.props.type==='email' && !regex.test(value)){
            message= 'Digite um email válido'
        }

        this.setState({ message : message }, this.props.onChange)    // set é uma funçao que chama o DOM
        return                                                       // setState    
    }
    render() {
        return (
            <React.Fragment>  
                <input 
                    onChange={this.handleChange}  //onChange é do Input
                    onBlur={this.handleChange}      // validaçao do input
                    type={this.props.type}
                    id={this.props.id}
                    className= 'input'
                    placeholder={this.props.placeholder}
                    required={this.props.required} 
                />
                <p className='input__erro'>{this.state.message}</p>
            </React.Fragment>

        )
    }
}

export default Input