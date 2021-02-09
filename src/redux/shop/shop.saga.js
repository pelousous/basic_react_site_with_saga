import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from "./shop.types";
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess } from './shop.actions';


//const delay = (ms) => new Promise(res => setTimeout(res, ms))


// Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC

// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

export function* fetchCollectionsAsync() {
    console.log('fetch collection async thunk fired!!');

    const collectionsRef = firestore.collections('collections');
    const snapshot = yield collectionsRef.get();
    const collectionsMapped = yield call(convertCollectionSnapshotToMap(snapshot.docs));

    yield put(fetchCollectionSuccess(collectionsMapped));

    // const collectionRef = firestore.collection('collections');
    // dispatch(fetchCollectionStart());

    // collectionRef.get().then(snapshot => {
    //     const collectionMapped = convertCollectionSnapshotToMap(snapshot.docs);
    //     dispatch(fetchCollectionSuccess(collectionMapped));
    // }).catch((err) => 
    //     dispatch(fetchCollectionFailure(err.message))
    // )
}

export function* fetchCollectionsStart() {
    yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}