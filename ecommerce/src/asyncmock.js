const products = [
    {id:'1',
    name: 'Dos hornallas',
    price: 1000,
    category: 'Cocinas',
    img: '../img/imagen19.png',
    stock: 25,
    description: 'Descripcion de Cocinas'
    },
    {id:'2',
    name: 'Cuatro Hornallas',
    price: 1000,
    category: 'Cocinas',
    img: '../img/imagen20.png',
    stock: 25,
    description: 'Descripcion de Cocinas'
    },
    {id:'3',
    name: 'Tres hornallas',
    price: 1000,
    category: 'Cocinas',
    img: '../img/imagen18.png',
    stock: 25,
    description: 'Descripcion de Cocinas'
    }
]

export const getProducts = () => { 
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 100)
    })
}

export const getProductsbyCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category == categoryId));
        }, 1000);
    });
};

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId));
        }, 100);
    });
};
