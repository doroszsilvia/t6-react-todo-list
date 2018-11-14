import React from 'react'
import { storiesOf } from '@storybook/react'
import Form from './index'

storiesOf ( 'Components/Form', module)
    .add('default', () =>(
        <Form> Form Here </Form> 
    ))