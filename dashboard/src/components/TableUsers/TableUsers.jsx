import React, { Component } from "react";
import RowUsers from "./RowUsers";

class TableUsers extends Component {

    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:3002/api/users")
        const data = await response.json()

        this.setState({users: data.users})
        console.log(data)

    }


    render() {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Foto del Usuario</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Email</th>
                        <th>Dirección</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(this.state.users) && this.state.users.map((usuario, i) => <RowUsers key={i} user={usuario} />)
                    }
                </tbody>


            </table>
        )
    }
}


export default TableUsers;