import React, { Component} from 'react';
import './App.css';
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react';
import If from './If';
import api from './utils/api';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'', 
      resp: {}
    }
  }

  submit = async() => {
    await api.post('/usuario/login', {login: this.state.username, senha: this.state.password}).then((resp) => {
      this.setState({resp});
      if(this.state.resp.data !== 'Usuário ou senha inválidos!') {
        this.setState({ redirect: true })
      }
    }).catch((error) => {
      console.log('error', error);
    });  
  }

  render() {
    const { resp } = this.state

    return (
      <Grid textAlign='center' className='grid' verticalAlign='middle'>
        <Grid.Column className='column'>
          <Header as='h2'  textAlign='center' className='header'> 
          Login 
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' onChange={(evt) => this.setState({ username: evt.target.value})}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Senha'
                type='password'
                onChange={(evt) => this.setState({ password: evt.target.value})}
              />

              <Button className='btn' fluid size='large' onClick={() => this.submit()}>
                Login
              </Button>
              <If condition={resp.data === 'Usuário ou senha inválidos!'}>
                  <span className='loginmsg'>Login/Senha inválidos!</span>
              </If>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )  
  }
}

export default LoginForm;
