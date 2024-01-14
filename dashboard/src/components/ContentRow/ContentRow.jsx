import React, { Component } from "react"
import Card from "./Card/Card";
import CategoryCard from './CategoryCard/CategoryCard'

// import { Link } from "react-router-dom";

class ContentRow extends Component {

    constructor() {
        super()
        this.state = {
            product: [],
            category: [],
            users: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3002/api/productos');
        const data = await response.json();

        const responseUser = await fetch('http://localhost:3002/api/users');
        const dataUser = await responseUser.json();


        this.setState({ product: data })
        this.setState({ category: data.countByCategory })

        // let num = data.products.length - 1 
        // console.log(num)
        // console.log(data.products.at(-1).detail)
        // console.log(data.countByCategory)


        this.setState({ users: dataUser.users })

    }


    render() {

        let arrayProducts = this.state.product.products
        let descripcion;
        let image;
        let name;
        let precio;

        if (Array.isArray(arrayProducts)) {
            descripcion = arrayProducts[arrayProducts.length - 1].description
            image = arrayProducts.at(-1)?.imagen  //OTRA METODO DE TOMAR EL ULTIMO ELEMENTO DE UN ARRAY
            name = arrayProducts.at(-1)?.name 
            precio = arrayProducts.at(-1)?.precio 
        }
        // console.log(image)

        let arrayUsers = this.state.users
        let imageUser;
        let nameUser;
        let emailUser;

        if (Array.isArray(arrayUsers)) {
            imageUser = arrayUsers[arrayUsers.length - 1]?.image
            nameUser = arrayUsers[arrayUsers.length - 1]?.name
            emailUser = arrayUsers.at(-1)?.email  //OTRA METODO DE TOMAR EL ULTIMO ELEMENTO DE UN ARRAY
        }
        // console.log(imageUser)


        return (
            <div className="row">

                <Card title={"Ultimo plato agregado"}>

                    <div className="text-center">
                        {
                            image === undefined && <p>Cargando...</p>
                        }
                        {
                            image !== undefined && <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={`http://localhost:3002/img/productos/${image}`} alt="Ultimo Producto" />
                        }
                    </div>

                    
                    {
                        // Array.isArray(arrayProducts) && console.log(arrayProducts[arrayProducts.length - 1].imagen)
                        name === undefined && <h1>Cargando...</h1>
                    }
                    {
                        name !== undefined && <h1>{name}</h1>
                    }
                    <ul>
                    {
                        precio === undefined && <li>Cargando...</li>
                    }
                    {
                        precio !== undefined && <li> PRECIO: ${precio}</li>
                    }

                    {
                        descripcion === undefined && <li>Cargando...</li>
                    }
                    {
                        descripcion !== undefined && <li>DESCRIPCÓN: {descripcion}</li>
                    }
                    </ul>

                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                </Card>


                <Card title={"Ultimo Usuario Registrado"}>

                    <div className="text-center">
                        {
                            imageUser === undefined && <p>Cargando...</p>
                        }
                        {
                            imageUser !== undefined && <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={`http://www.localhost:3002/img/usuarios/${imageUser}`} alt="Ultimo Usuario" />
                        }
                    </div>

                    <ul>
                        {
                            nameUser !== undefined && <li>USUARIO: {nameUser}</li>
                        }
                        {
                            emailUser !== undefined && <li>EMAIL: {emailUser}</li>
                        }
                    </ul>

                </Card>


                <Card title={"Categorías"}>
                    <div className="row">

                        {
                            this.state.category.length === 0 && <h3>Cargando...</h3>
                        }
                        {
                            this.state.category.length > 0 && this.state.category.map((categoria, i) => <CategoryCard key={i} category={categoria.nombre} count={categoria.count} />)
                        }

                    </div>
                </Card>


            </div>
        )
    }

}


export default ContentRow;
