import './ItemListContainer.css'
const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            
            <h1>{greeting}</h1>
           <link rel="https://pixabay.com/es/illustrations/carro-de-compras-compras-tienda-1923313/" href="" />
        </div>
    )
}
//usamos funciones tipo flecha salvo que tengamos un componente muy chico y no lo modularicemos (lo dejemos adnetro) por lo tanto el componente principal quede como function y el otro como arrow
//greeting es destructuring (prop.greeting)={greeting}

export default ItemListContainer