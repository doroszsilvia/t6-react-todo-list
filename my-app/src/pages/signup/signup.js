import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'



function Signup (){
    return(
        
        <Container>

            <Form title='Faça Seu Cadastro' text='Preencha com Seus Dados'>

                <Form.Label htmlFor='nome'> Nome </Form.Label>
                <Form.Input id='name' type='text' />

                <Form.Label htmlFor='email'> E-mail </Form.Label>
                <Form.Input id='email' type='email' />

                <Form.Label htmlFor='phone'> Telefone </Form.Label>
                <Form.Input id='phone' type='tel' />

                <Form.Label htmlFor='password'> Senha </Form.Label>
                <Form.Input id='password' type='password' />

                <Form.Button disabled> Enviar </Form.Button>
                <Form.Link href='www.google.com.br'> Fazer Login </Form.Link>

            </Form>

        </Container>
    )
}

export default Signup 