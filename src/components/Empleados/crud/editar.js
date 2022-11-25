import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPrompts from '../../prompts/confirmation';
import '../Empleados.css';


export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            idEmpleado: this.props.getIdEmpleado(),
            rediret: false,
            message: {
                text: "",
                show: false
            },
            confirmation: {
                title: 'Modificar Empleado',
                text: 'Deseas Modificar el Empleado?',
                show: false,
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
         this.onCancel = this.onCancel.bind(this);
         this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {
        this.getEmpleado();
    }

    getEmpleado() {
        this.setState({ loading: true });
        request
            .get(`/empleados/${this.state.idEmpleado}`)
            .then((response) => {
                this.setState({ 
                    empleado:response.data,
                    loading: false, 
                })
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false })
            });
    }

    setValue(index, value) {
        this.setState({
            empleado: {
                ...this.state.empleado,
                [index]: value,
            },
        })
    }

    modificarEmpleados() {
        this.setState({ loading: true });
        request
            .put(`/empleados/${ this.state.idEmpleado }`, this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: "el empleado se modifico correctamente",
                            show: true,
                        },
                    })
                }
                this.setState ({ loading: false });
            })
            .catch((err) => {
                this.setState({ loading: false })
                console.log(err);
            })
    }

    onExitedMessage () {
        if (this.state.rediret) this.props.changeTab( 'buscar' );
      }
      
    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            }
        })
    }

    onConfirm() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            }
        })
        this.modificarEmpleados();
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

                <ConfirmationPrompts 
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    />

                <Loading show={this.state.loading}></Loading>

                <Row>
                    <h1>Editar Empleados</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control value={this.state.empleado.nombre} onChange={(e) => this.setValue('nombre', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control value={this.state.empleado.apellido_p} onChange={(e) => this.setValue('apellido_p', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control value={this.state.empleado.apellido_m} onChange={(e) => this.setValue('apellido_m', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control value={this.state.empleado.telefono} onChange={(e) => this.setValue('telefono', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={this.state.empleado.mail} onChange={(e) => this.setValue('mail', e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control value={this.state.empleado.direccion} onChange={(e) => this.setValue('direccion', e.target.value)} />
                        </Form.Group>

                        {/* <Button variant="primary" onClick={() => this.modificarEmpleados()}> */}
                        <Button 
                            variant="primary" 
                            onClick={() => 
                                this.setState({
                                    confirmation: { ...this.state.confirmation, show: true },
                                })
                                }
                            >
                            Modificar Empleado
                        </Button>
                    </Form>
                </Row>
            </Container>
         );
    }
}
 
