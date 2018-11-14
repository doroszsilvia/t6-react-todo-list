import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './container'
import Container from './container';

storiesOf ( 'Components/Form/Container', module)
    .add('default', () =>(
        <Container> Children Here </Container> 
    ))