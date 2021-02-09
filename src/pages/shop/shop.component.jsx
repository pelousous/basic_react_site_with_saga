import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {fetchCollectionStart} from '../../redux/shop/shop.actions';
import {isFetchingSelector, selectIsCollectionLoaded} from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionSpinner = WithSpinner(CollectionPage);
const CollectionsSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollections} = this.props
        // const collectionRef = firestore.collection('collections');

        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionMapped = await convertCollectionSnapshotToMap(snapshot.docs);
        //     this.props.updateCollections(collectionMapped);
        //     this.setState({isLoading: false})
        // })
        fetchCollections();
    }

    render() {
        const {isFetching, match, isCollectionLoaded} = this.props;
        
        return (
            <div className='shop-page'>
                <Route exact path={match.path} render={(props) => <CollectionsSpinner isLoading={isFetching} {...props} />} />
                <Route exact path={`${match.path}/:collectionId`} render={(props) => (<CollectionSpinner isLoading={!isCollectionLoaded} {...props} />)} />
            </div>
        );
    } 
}

const mapStateToProps = (state) => ({
    isFetching: isFetchingSelector(state),
    isCollectionLoaded: selectIsCollectionLoaded(state)
})

const mapDispatchToProps = dispatch => {
    return {
        fetchCollections: () => dispatch(fetchCollectionStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
