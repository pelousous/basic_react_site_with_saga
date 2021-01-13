import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {

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

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
