import React from "react";

function RowUsers({ user }) {


    return (
        <tr>
            <td><img src={`http://www.localhost:3002/img/usuarios/${user.image}`} alt="Foto Usuario" style={{width: '8rem'}} /></td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.apellido}</td>
            <td>{user.dni}</td>
            <td>{user.email}</td>
            <td>{user.direccion}</td>

            {/* {
                Array.isArray(user.category) && user.category.map((categoria, i) => <td key={i + categoria.nombre}> {categoria.nombre} </td>)
            } */}

            {/* { user.category ? user.category.nombre : null  } */}


        </tr>
    )
}

export default RowUsers;