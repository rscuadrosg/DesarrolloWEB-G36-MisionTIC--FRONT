import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Login.css';
import Encabezado from './Encabezado';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user:'', pass:''}
    }
    state = {}

    // Metodo iniciar Sesion
    iniciarSesion(){
        alert(`Usuario: ${this.state.user} - Passsword: ${this.state.pass}`);
    }



    render() {
        return (
            <Container id="login-container" >
                <Row>
                    <Encabezado />
                    <h2>Iniciar Sesion</h2>
                </Row>
                <Row>
                    <Col 
                        sm="12"
                        xs="12"
                        md={{ span: 4, offset: 4 }}
                        lg={{ span: 4, offset: 4 }}
                        xl={{ span: 4, offset: 4 }}
                    >
                        <Form>
                            <Form.Group >
                                <Form.Label >Usuario</Form.Label>
                                <Form.Control placeholder="Ingrese Usuario" onChange={(e)=> this.setState({ user: e.target.value })}/>
                            </Form.Group>

                            <Form.Group >
                                <Form.Label >Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese Contraseña" onChange={(e)=> this.setState({ pass: e.target.value })}/>
                            </Form.Group>

                            <Button variant="primary" onClick={ () => {this.iniciarSesion()} }>
                                Iniciar Sesion
                            </Button>
                        </Form>
                    </Col>
                </Row>


            </Container>
        );
    }
}

export default Login;