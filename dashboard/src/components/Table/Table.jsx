import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {

    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:3002/api/productos")
        const data = await response.json()

        this.setState({products: data.products})
        console.log(data)

    }


    render() {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>    
                        <th>Plato</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Categoria</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(this.state.products) && this.state.products.map((producto, i) => <Row key={i} product={producto} />)
                    }
                </tbody>


            </table>
        )
    }
}


export default Table;