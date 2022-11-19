import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DataGrid from '../grid/grid';
import { request } from '../helper/helper';
import './designs.css';

// CAMPOS DEL PROYECTO PARA LOS DISEÑOS
const columns = [{
    dataField: "design_id",
    text: "ID",
}, {
    dataField: 'nombre',
    text: 'Nombre Diseño'
}, {
    dataField: 'descripcion',
    text: 'Descripcion'
}, {
    dataField: 'urlimg',
    text: 'Url de la Imagen'
}];

export default class DesignsBuscar extends React.Component {
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
            <Container id='designs-buscar-container'>
                <Row>
                    <h1>BUSCAR DISEÑOS</h1>
                </Row>
                <Row>
                    {/* DATOS DE NUESTRO PROYECTO*/}
                    <DataGrid url="/designs" columns={ columns } ></DataGrid>
                </Row>
            </Container>
        );
    }
}
 

