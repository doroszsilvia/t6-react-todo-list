import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'
import {setUser} from '../../infra/local-storage' 
import { loginUser } from '../../apis/login.api' 


class Login extends React.Component {
    constructor(){
        super()
        this.state={ disabled : true }
        this.email= React.createRef()
        this.password= React.createRef()
    }
    onDisabledButton = ()=> {
        console.log('this.email =>', this.email.current)
        const inputEmail = this.email.current
        const inputPassword = this.password.current

        if(inputEmail.hasError() || inputPassword.hasError()){
            this.setState({disabled : true})
        }else{
            this.setState({disabled : false})
        }

    }
    handleSubmit= (e) =>{
        e.preventDefault()

        const inputEmail = this.email.current
        const inputPassword = this.password.current
        const user = {
            email: inputEmail.getValue(),
            password : inputPassword.getValue()
        }

        loginUser(user)
            .then((response) => {                             // promise
                setUser({ email : user.email})
                this.props.history.push('/') 
            })
            .catch((error) => {                               // retorna erro 
                console.log(error)
            })

    }
    render(){
        return (
            <Container>
            
                <Form title='Login' text='Entre com Seu E-mail e Senha' onSubmit={this.handleSubmit}>
                    <Form.Label htmlFor='email'> Email </Form.Label>
                    <Form.Input ref={this.email} id='email' type='email' onChange={this.onDisabledButton} required/>

                    <Form.Label htmlFor='password'> Password </Form.Label>
                    <Form.Input ref={this.password} id='password' type='password' minLength={6} onChange={this.onDisabledButton} required />

                    <Form.Button disabled={this.state.disabled}> Enviar </Form.Button>
                    <Form.Link href='/conta'> Criar uma conta </Form.Link>
                </Form>

            </Container>

        )
    }

}
export default Login 

