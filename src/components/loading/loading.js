import React from "react";
import { Spinner } from 'react-bootstrap'; 
import './loading.css';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillReceiveProps(nextProps) { 
        if ( nextProps.show !== this.state.show ) {
            this.setState({ show: nextProps.show });
        }
    }

    render() { 
        return (
            // //antes de comprobar clase 12/11/2022
            // <div id="loading-backdrop">
            //     <Spinner animation="grow" variant="info" />
            // </div>
            <>
                {this.state.show ? (
                    <div id="loading-backdrop">
                        <Spinner animation="grow" variant="info" />
                    </div>
                    ) : null
                }
            </>
        );
    }
}
 
export default Loading;