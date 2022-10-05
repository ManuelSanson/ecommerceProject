const products = [
    { id: 1, title: "Camiseta", category: 'camisetas', description: "Camiseta de algodón negra", price: 600, pictureURL: "https://res.cloudinary.com/diqry3ihg/image/upload/v1664831392/productPictures/remeraNegra_a7pxfc.png", stock: 80 },
    { id: 2, title: "Buzo", category: 'buzos', description: "Buzo medio cierre negro", price: 800, pictureURL: "https://res.cloudinary.com/diqry3ihg/image/upload/v1664831372/productPictures/buzoMedioCierre_h65mis.png", stock: 20 },
    { id: 3, title: "Campera", category: 'camperas', description: "Campera negra sin capucha", price: 1400, pictureURL: "https://res.cloudinary.com/diqry3ihg/image/upload/v1664831385/productPictures/campera_nzzcoz.png", stock: 12 }
]

export const getAllProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            return resolve(products)
        }, 2000)
    })

    return promise
};

export const getProductsByCategory = (categoryName) => {
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryName)
        setTimeout(() => {
        return resolve(results);
        }, 2000)
    })

    return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === Number(id))
        setTimeout(() => {
        return resolve(result);
        }, 2000)
    })

    return promise
};