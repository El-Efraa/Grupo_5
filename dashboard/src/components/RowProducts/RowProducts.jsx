import React, { Component } from "react";
import Card from "./Card/Card";
import { Link } from "react-router-dom";

class RowProducts extends Component {

    constructor() {
        super()
        this.state = {
            products: [],
            category: [],
            users: []
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:3002/api/productos")
        const data = await response.json()

        this.setState({ products: data })
        this.setState({ category: data.countByCategory })

        // console.log(data)
        // console.log(data.countByCategory)
        // console.log(data.products)

        const responseUsers = await fetch("http://localhost:3002/api/users")
        const dataUsers = await responseUsers.json()

        this.setState({ users: dataUsers })

        // console.log("--------------")
        // console.log(dataUsers)
    }


    render() {
        return (
            <div className="row">
                <Link to="/table-products" className="col-md-4 mb-4">

                    <Card title={"Total de Productos"} cifra={this.state.products.count} icono={"fa-solid fa-tags fa-2x"} />
                </Link>


                <Link to="/table-users" className="col-md-4 mb-4">

                    <Card title={"Total de usuarios"} cifra={this.state.users.count} icono={"fa-solid fa-user fa-2x"} />
                </Link>


                <Link to='/category' className="col-md-4 mb-4">

                    <Card title={"Total de categorias"} cifra={this.state.category.length} icono={"fa-solid fa-table fa-2x"} />
                </Link>


            </div>
        )
    }
}

export default RowProducts; 