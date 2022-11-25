import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import '../Empleados.css';

export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            rediret: false,
            message: {
                text: "",
                show: false
            },
            loading: false,
            empleado: {
                nombre: "",
                apellido_p: "",
                apellido_m: "",
                telefono: "",
                mail: "",
                direccion: "",
            }
         }
         this.onExitedMessage = this.onExitedMessage.bind(this);
    }

    setValue(index, value) {
        this.setState({
            empleado: {
                ...this.state.empleado,
                [index]: value,
            },
        })
    }

    guardarEmpleados() {
        request
            .post('/empleados', this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    })
                }
                else {
                    this.setState({
                        message: {
                            text: "Error al crear usuario",
                            show: true,
                    }, })
                }
            })
            .catch((err) => {
                this.setState({ loading: true })
                console.log(err);
            })
    }

    onExitedMessage () {
        if (this.state.rediret) this.props.changeTab( 'buscar' );
      }    

    render() { 
        return ( 
            <Container id="empleados-crear-container">

                <MessagePrompt 
                    text={this.state.message.text}
                    show={this.state.message.show} 
                    duration={1500} 
                    onExited={this.onExitedMessage}
                    />

                <Loading show={this.state.loading}></Loading>

                <Row>
                    <h1>Crear Empleados</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('nombre', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('apellido_p', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('apellido_m', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('telefono', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('mail', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('direccion', e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={() => this.guardarEmpleados()}>
                            Guardar Empleado
                        </Button>
                    </Form>
                </Row>
            </Container>
         );
    }
}
 
