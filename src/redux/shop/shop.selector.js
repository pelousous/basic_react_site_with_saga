import {createSelector} from 'reselect';

const shopSelector = state => state.shop;

export const collectionsSelector = createSelector(
    shopSelector,
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    collectionsSelector,
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const collectionSelector = pathParam => createSelector(
    collectionsSelector,
    collections => collections ? collections[pathParam] : null
)