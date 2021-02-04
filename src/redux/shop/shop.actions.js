import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from "./shop.types";

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

// export const updateCollections = (collections) => (
//     {
//         type: UPDATE_COLLECTIONS,
//         payload: collections
//     }
// )

export const fetchCollectionStart = () => ({
    type: FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = (collections) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collections
})

export const fetchCollectionFailure = (errorMessage) => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef.get().then(snapshot => {
            const collectionMapped = convertCollectionSnapshotToMap(snapshot.docs);
            dispatch(fetchCollectionSuccess(collectionMapped));
        }).catch((err) => 
            dispatch(fetchCollectionFailure(err.message))
        )
}