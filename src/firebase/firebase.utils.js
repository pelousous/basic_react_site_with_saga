import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCErWE-ZKe44ln5ag0Ibm8cxzcUmFW9pT4",
    authDomain: "crwn-db-02.firebaseapp.com",
    databaseURL: "https://crwn-db-02.firebaseio.com",
    projectId: "crwn-db-02",
    storageBucket: "crwn-db-02.appspot.com",
    messagingSenderId: "206580718199",
    appId: "1:206580718199:web:a32325f75f407b43c44472",
    measurementId: "G-H0QK4F7R3D"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (user, additionalData) => {

    if(!user) return false;

    const userRef = firestore.collection('users').doc(user.uid);
    const doc = await userRef.get();

    if (!doc.exists) {
        const {displayName, email} = user;    

        try {
            await userRef.set({
                displayName,
                email,
                createdAt: new Date(),
                ...additionalData
            });
        } catch(err) {
            console.log('error inserting user in db : ', err.message);
        }
    } 

    return userRef;

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const objRef = collectionRef.doc();

        batch.set(objRef, obj);
    })

   return await batch.commit();    
}

export const convertCollectionSnapshotToMap = async (docs) => {

    const mapColl = await docs.map(el => {
        const {title, items} = el.data();
        return ({
            routeName: encodeURI(title.toLowerCase()),
            id: el.id,
            title,
            items
        })
    })

    return mapColl.reduce((acc, el) => {
        acc[el.title.toLowerCase()] = el;
        return acc;
    },{})
}

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
