import { useEffect, useState } from "react";
import { getProducts, getProductsbyCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const asyncFunction = categoryId ? getProductsbyCategory : getProducts;

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);

    if (loading) {
        return <h1>Cargando listado de productos...</h1>;
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;