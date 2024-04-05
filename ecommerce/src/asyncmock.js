const products = [
    {id: '1',
    name: 'Dos hornallas Multiple',
    price: 74.999,
    category: 'Cocinas',
    img: '../img/imagen7.png',
    stock: 25,
    description: 'Este producto es una cocina de dos hornallas, ideal para espacios pequeños en hogares o apartamentos.'
    },
    {id: '2',
    name: 'Multiple',
    price: 74.999,
    category: 'Cocinas',
    img: '../img/imagen1.png',
    stock: 25,
    description: 'Esta cocina grande de cuatro hornallas es perfecta para familias numerosas o para aquellos que disfrutan cocinar en grandes cantidades.'
    },
    {id: '3',
    name: 'Slim',
    price: 74.999,
    category: 'Campanas',
    img: '../img/imagen4.png',
    stock: 25,
    description: 'Nuestra campana extractora de acero inoxidable ofrece una potente capacidad de extracción para eliminar eficazmente el humo y los olores de tu cocina, manteniendo el aire fresco y limpio.'
    },
    {id: '4',
    name: 'Dos hornallas',
    price: 44.999,
    category: 'Anafes',
    img: '../img/imagen22.png',
    stock: 25,
    description: 'El anafe de inducción de acero inoxidable proporciona una cocción rápida y eficiente, perfecta para aquellos que buscan una opción moderna y elegante para su cocina.'
    },
    {id: '5',
    name: 'Acampanada',
    price: 74.999,
    category: 'Campanas',
    img: '../img/imagen5.png',
    stock: 25,
    description: 'Nuestra campana extractora de acero inoxidable ofrece una potente capacidad de extracción para eliminar eficazmente el humo y los olores de tu cocina, manteniendo el aire fresco y limpio.'
    },
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
        }, 400);
    });
};

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId));
        }, 100);
    });
};