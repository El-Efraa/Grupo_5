import React, { Component } from "react"
import Card from "../components/ContentRow/Card/Card";
import CategoryCard from '../components/ContentRow/CategoryCard/CategoryCard'

// import { Link } from "react-router-dom";

class ContentRow extends Component {

    constructor() {
        super()
        this.state = {
            category: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3002/api/productos');
        const data = await response.json();

        this.setState({ category: data.countByCategory })

    }


    render() {
/* 
        let arrayProducts = this.state.product.products
        let descripcion;
        let image;

        if (Array.isArray(arrayProducts)) {
            descripcion = arrayProducts[arrayProducts.length - 1].description
            image = arrayProducts.at(-1)?.imagen  //OTRA METODO DE TOMAR EL ULTIMO ELEMENTO DE UN ARRAY
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
        } */
        // console.log(imageUser)


        return (
            <div className="row">

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
