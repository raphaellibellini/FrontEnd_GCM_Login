import React, { Component} from 'react';
import './App.css';
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react';

class LoginForm extends Component {
  render() {
    return (
      <Grid textAlign='center' className='grid' verticalAlign='middle'>
        <Grid.Column className='column'>
          <Header as='h2'  textAlign='center' className='header'> 
          Login 
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Senha'
                type='password'
              />

              <Button className='btn' fluid size='large' >
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )  
  }
}

export default LoginForm;
