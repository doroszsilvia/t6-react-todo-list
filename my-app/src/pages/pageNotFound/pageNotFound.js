import React from 'react'
import './pageNotFound.css'
import NotFoundImg from './notFound.jpg'


function pageNotFound (){
    return(
        <div className='page-not-found'>
            <h1> Opss, página não encontrada </h1>
            <img src={NotFoundImg} />
        </div>
    )
}

export default pageNotFound;