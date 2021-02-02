import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionSpinner = WithSpinner(CollectionPage);
const CollectionsSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionMapped = await convertCollectionSnapshotToMap(snapshot.docs);
            this.props.updateCollections(collectionMapped);
            this.setState({isLoading: false})
        })
    }

    render() {
        const {match} = this.props;
        console.log('shop component props: ', this.props);
        return (
            <div className='shop-page'>
                <Route exact path={match.path} render={(props) => <CollectionsSpinner isLoading={this.state.isLoading} {...props} />} />
                <Route exact path={`${match.path}/:collectionId`} render={(props) => (<CollectionSpinner isLoading={this.state.isLoading} {...props} />)} />
            </div>
        );
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        updateCollections: (collectionMapped) => dispatch(updateCollections(collectionMapped))
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);
