import React from 'react'
import { storiesOf } from '@storybook/react'
import Container from './container';

storiesOf ( 'Components/Container', module)
    .add('default', () =>(
        <Container> Children Here </Container> 
    ))