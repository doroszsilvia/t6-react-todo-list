import React from 'react'
import { getUser } from '../../infra/local-storage'
import { Redirect } from 'react-router-dom'
import Postit from '../../components/postit'
import { getPostitsApi } from '../../apis/postit.api'

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            postits : []
        }
    }
    componentDidMount() {                                      // depois do render (foi montado) para usar request de API
        console.log('Hello componentDidMount foi criado')
        this.getPostits()
    }
    componentWillUnmount() {
        console.log('Hello componentWillUnmount morreu :(')
    }
    getPostits = () => {
        getPostitsApi()
            .then((response) =>{
                console.log(response)
                this.setState({
                    postits : response.data.todo
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render(){                                      
        if(getUser()){
            return this.state.postits.map((item)=>{
                console.log('item', item)
                        return <Postit />
                    })
        }else{
            return <Redirect to='/login' />
        }
    }

}
export default Home 