import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { request } from '../helper/helper';
import './Empleados.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const { SearchBar } = Search;
const products = [
    {
        id: 1,
        name: "diseño1",
        price: 1000
    },
    {
        id: 2,
        name: "diseño2",
        price: 2000
    },
    {
        id: 3,
        name: "diseño3",
        price: 3000
    },
    {
        id: 4,
        name: "diseño4",
        price: 4000
    },
    {
        id: 5,
        name: "diseño1",
        price: 1000
    },
    {
        id: 6,
        name: "diseño2",
        price: 2000
    },
    {
        id: 7,
        name: "diseño3",
        price: 3000
    },
    {
        id: 8,
        name: "diseño4",
        price: 4000
    },
    {
        id: 9,
        name: "diseño1",
        price: 1000
    },
    {
        id: 10,
        name: "diseño2",
        price: 2000
    },
    {
        id: 11,
        name: "diseño3",
        price: 3000
    },
    {
        id: 12,
        name: "diseño4",
        price: 4000
    },
    {
        id: 13,
        name: "diseño1",
        price: 1000
    },
    {
        id: 14,
        name: "diseño2",
        price: 2000
    },
    {
        id: 15,
        name: "diseño3",
        price: 3000
    },
    {
        id: 16,
        name: "diseño4",
        price: 4000
    },
    {
        id: 17,
        name: "diseño1",
        price: 1000
    },
    {
        id: 18,
        name: "diseño2",
        price: 2000
    },
    {
        id: 19,
        name: "diseño3",
        price: 3000
    },
    
    {
        id: 20,
        name: "diseño4",
        price: 4000
    },
];
const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];
  

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        const options = {
            custom: true,
            totalSize: products.length
          };
        return (
            <Container id='empleados-buscar-container'>
                <Row>
                    <h1>BUSCAR EMPLEADOS</h1>
                </Row>
                <Row>
                    {/* <BootstrapTable keyField='id' data={products} columns={columns} pagination={ paginationFactory() } /> */}

                    <ToolkitProvider
                        keyField="id"
                        data={products}
                        columns={columns}
                        search
                    >
                        {
                            props => (
                                <>
                                    <SearchBar {...props.searchProps} />
                                    <hr />
                                    <PaginationProvider
                                        pagination={paginationFactory(options)}
                                    >
                                        {
                                            ({
                                                paginationProps,
                                                paginationTableProps
                                            }) => (
                                                <div>
                                                    <SizePerPageDropdownStandalone
                                                        {...paginationProps}
                                                    />
                                                    <BootstrapTable
                                                        keyField="id"
                                                        data={products}
                                                        columns={columns}
                                                        {...paginationTableProps}
                                                        { ...props.baseProps }
                                                    />
                                                    <PaginationListStandalone
                                                        {...paginationProps}
                                                    />
                                                </div>
                                            )
                                        }
                                    </PaginationProvider>
                                </>
                            )
                        }
                    </ToolkitProvider>
                </Row>
            </Container>
        );
    }
}
 
