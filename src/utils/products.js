import { getFirestore, collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore';

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
            if (snapshot.size === 0) {
                return [];
            }
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
                return item;
            }
        })
        .catch(error => console.warn(error));
};

export const getStrongProducts = () => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items')
    const collectionQuery = query(collectionReference, where('strong', '==', true))

    return getDocs(collectionQuery)
        .then((snapshot) => {
            if (snapshot.size === 0) {
                return [];
            }
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