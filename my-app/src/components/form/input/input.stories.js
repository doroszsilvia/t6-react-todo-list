import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './index'

storiesOf('Components/Form/Input', module)
    .add('default', () =>(   // n precisa colocar return abrindo ()
        <Input type='text' placeholder='Digite Seu Nome' required/>
    ))