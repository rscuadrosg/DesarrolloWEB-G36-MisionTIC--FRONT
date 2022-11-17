import React from 'react';

// CONEXION CON EL BACK
import axios from 'axios';
import app from '../app.json';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Login.css';
import { isNull } from 'util';
import Cookies from 'universal-cookie';
import { calculaFinSesion } from '../helper/helper';
import Loading from '../loading/loading';
import Encabezado from './Encabezado';
// Cookies
const cookies = new Cookies();

// llamado al Json del servidor del back
const {APIHOST}=app;


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, user:'', pass:''}
        //this.state = { user:'', pass:''}
    }
    state = {}

    // Metodo iniciar Sesion
    iniciarSesion(){
        //llamar a loading
        this.setState({ loading: true });

        //Llamado a la URL de usuarios, (la que se probo con postman)
        axios
        .post(`${APIHOST}/users/login`, {
            user: this.state.user,
            pass: this.state.pass,
        })
        .then((response) => {
            if (isNull(response.data.token)) {
                alert('usuario y/o contraseña invalid@s')
            } else {
                cookies.set('_s', response.data.token, {
                    path: '/',
                    expires: calculaFinSesion(),
                })
                this.props.history.push(window.open('/empleados', '_self'));
            }
            //ocultar animacion loading
            this.setState({ loading: false })
        })
        .catch((err) => {
            console.log(err);
            //ocultar animacion loading
            this.setState({ loading: false })
        })

        //alert(`Usuario: ${this.state.user} - Passsword: ${this.state.pass}`); 
        //--- se hizo para validar en pruebas de navegador que tomara el estado del usuario autenticado
    }


    render() {
        return (
            <Container id="login-container">

                {/* Animacion del loading */}
                <Loading show={this.state.loading} />

                {/* ENCABEZADO con logo del proyecto*/}
                <Row>
                    <Encabezado />
                    <h2>Iniciar Sesion</h2>
                </Row>

                {/* FORMULARIO */}
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