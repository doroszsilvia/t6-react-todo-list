import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

class Menu extends React.Component {
    constructor(){
    super()
    this.state = {open : false}          // definimos sempre no construtor o state

    }
    handleOpenOrClose = () => {
        this.setState({ open : !this.state.open})  // faz o contrario, muda o estado do Open setState altera no DOM
    }
    render(){ 
        
        let classesOfButton = 'menu__button'
        let classesOfOptions = 'menu__options'

        if(this.state.open){
            classesOfButton += ' menu__button--open'         // -- metodo bem modificador     IF sempre retorna True
            classesOfOptions += ' menu__options--open'
        }

        return (
            <div>
                <a className={classesOfButton} onClick={this.handleOpenOrClose} >
                    Menu
                </a>
                <ul className={classesOfOptions} onClick={this.handleOpenOrClose} >
                    <li>
                        <Link to='/quem-somos'>
                            Quem Somos
                        </Link>
                    </li>
                    <li>
                        <Link to='/contato'>
                            Contato
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}   

export default Menu