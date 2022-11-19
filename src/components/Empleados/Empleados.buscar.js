import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DataGrid from '../grid/grid';
import { request } from '../helper/helper';
import './Empleados.css';

//EJEMPLOMDE LA PROFE EMILY
const columns = [{
    dataField: "_id",
    text: "ID",
    hidden: "true",
}, {
    dataField: 'nombre',
    text: 'Nombre'
}, {
    dataField: 'apellido_p',
    text: 'Primer Apellido'
}, {
    dataField: 'apellido_m',
    text: 'Segundo Apellido'
}, {
    dataField: 'telefono',
    text: 'Telefono'
}, {
    dataField: 'mail',
    text: 'Email',
}, {
    dataField: 'direccion',
    text: 'direccion'
}];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        request
            .get(this.props.url)
            .then((response) => {
                this.setState({ rows: response.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <Container id='empleados-buscar-container'>
                <Row>
                    <h1>BUSCAR EMPLEADOS</h1>
                </Row>
                <Row>
                    {/* EJEMPLO DE LA PROFE EMILY (EMPLEADOS) */}
                    <DataGrid url="/empleados" columns={ columns } ></DataGrid>

                    {/* DATOS DE NUESTRO PROYECTO*/}
                    {/* <DataGrid url="/empleados" columns={ columns } ></DataGrid>*/}
                </Row>
            </Container>
        );
    }
}

