import React, { Component }from 'react';
import './App.css';
import './index.css';
import { Card } from 'semantic-ui-react';
import api from './utils/api';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            moreInfos: ''
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = async() => {
        const user = this.props.location.state;
        const resp = await api.get(`/usuario/consulta/${user.id}`);
        const data = resp.data
        this.setState({ moreInfos: data })
    
    }

    render() {
        const { endereco, genero, id, nome, sobrenome } = this.state.moreInfos
        let fullGenero = '';
        let photo = '';
        console.log('test', this.state.moreInfos);
        if(genero === 'M') {
            fullGenero = 'Masculino'
        } else if(genero === 'F') {
            fullGenero = 'Feminino'
        } else {
            fullGenero = 'Genero indefinido'
        }

        if(id === 1) {
            photo = 'https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        } else if (id === 2) {
            photo = 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
        } else if (id === 3) {
            photo = 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
        }        
        
        return (
            <div>
                <h1 className='perfil'>Meu perfil</h1>
                <Card
                    image={photo}
                    header={`${nome} ${sobrenome}`}
                    meta={fullGenero}
                    description={endereco}
                    className='card'
                />
            </div>
        )
    }
}

export default Main;