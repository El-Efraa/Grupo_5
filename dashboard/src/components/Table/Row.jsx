import React from "react";

function Row({ product }) {


    return (
        <tr>
            <td><img src={`http://localhost:3002/img/productos/${product.imagen}`} style={{width: '8rem'}} alt="Img Product" /></td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.precio}</td>

            {
                Array.isArray(product.category) && product.category.map((categoria, i) => <td key={i + categoria.nombre}> {categoria.nombre} </td>)
            }

            {/* { product.category ? product.category.nombre : null  } */}


        </tr>
    )
}

export default Row;