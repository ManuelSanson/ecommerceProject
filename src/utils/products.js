const products = [
    { id: 1, title: "All Blacks Jersey", category: 'jerseys', description: "New Zealand All Blacks Home Rugby Shirt 2021", price: 1600, pictureURL: "https://www.lovellrugby.es/products/products_760x507/905593.jpg", stock: 13 },
    { id: 2, title: "Scotland Hoodie", category: 'hoodies', description: "Scotland Cotton Hoodie", price: 2300, pictureURL: "https://www.lovellrugby.es/products/products_760x507/430063.jpg", stock: 18 },
    { id: 3, title: "England Short", category: 'shorts', description: "England Home Shorts 2021 2022", price: 1100, pictureURL: "https://www.lovellrugby.es/products/products_760x507/955012.jpg", stock: 12 },
    { id: 4, title: "British and Irish Lions Jersey", category: 'jerseys', description: "British and Irish Lions Pro Shirt Tango Red", price: 1700, pictureURL: "https://www.lovellrugby.es/products/products_760x507/349151.jpg", stock: 18 },
    { id: 5, title: "Italy Hoodie", category: 'hoodies', description: "Italy Full Zip Hoodie", price: 2200, pictureURL: "https://www.lovellrugby.es/products/products_760x507/592813.jpg", stock: 10 },
    { id: 6, title: "Scotland Short", category: 'shorts', description: "Scotland 20/21 Training Shorts", price: 900, pictureURL: "https://www.lovellrugby.es/products/products_760x507/430093.jpg", stock: 20 }
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