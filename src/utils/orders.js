import { addDoc, collection, getFirestore, doc, getDoc } from "firebase/firestore";

export const createOrder = (newOrder) => {
    const database = getFirestore();
    const collectionReference = collection
    (database, 'orders')

    return addDoc(collectionReference, newOrder)
        .then((snapshot) => snapshot.id)
        .catch(error => console.warn(error));
}

export const getOrder = (id) => {
    const database = getFirestore();
    const itemReference = doc(database, 'orders', id);

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
}