import { getFirestore, collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore';

/*const products = [
    { id: 1, title: "All Blacks Jersey", category: 'jerseys', description: "New Zealand All Blacks Home Rugby Shirt 2021", price: 1600, pictureURL: "https://www.lovellrugby.es/products/products_760x507/905593.jpg", stock: 13 },
    { id: 2, title: "Scotland Hoodie", category: 'hoodies', description: "Scotland Cotton Hoodie", price: 2300, pictureURL: "https://www.lovellrugby.es/products/products_760x507/430063.jpg", stock: 18 },
    { id: 3, title: "England Short", category: 'shorts', description: "England Home Shorts 2021 2022", price: 1100, pictureURL: "https://www.lovellrugby.es/products/products_760x507/955012.jpg", stock: 12 },
    { id: 4, title: "B&I Lions Jersey", category: 'jerseys', description: "British and Irish Lions Pro Shirt Tango Red", price: 1700, pictureURL: "https://www.lovellrugby.es/products/products_760x507/349151.jpg", stock: 18 },
    { id: 5, title: "Italy Hoodie", category: 'hoodies', description: "Italy Full Zip Hoodie", price: 2200, pictureURL: "https://www.lovellrugby.es/products/products_760x507/592813.jpg", stock: 10 },
    { id: 6, title: "Scotland Short", category: 'shorts', description: "Scotland 20/21 Training Shorts", price: 900, pictureURL: "https://www.lovellrugby.es/products/products_760x507/430093.jpg", stock: 20 }
] */


export const getAllProducts = () => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items')
    
    return getDocs(collectionReference)
        .then((snapshot) => {
            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            return list;
        })
        .catch(error => console.warn(error));
};

export const getProductsByCategory = (categoryId) => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items')

    const collectionQuery = query(collectionReference, where('category', '==', categoryId))
    return getDocs(collectionQuery)
        .then((snapshot) => {
            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            return list;
        })
        .catch(error => console.warn(error));
};

export const getProduct = (id) => {
    const database = getFirestore();
    const itemReference = doc(database, 'items', id);
    
    return getDoc(itemReference)
        .then((snapshot) => {
            if(snapshot.exists()) {
                const item = {
                    id: snapshot.id,
                    ...snapshot.data()
                };
                return item
            }
        })
        .catch(error => console.warn(error));
};