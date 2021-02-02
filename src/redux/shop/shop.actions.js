import { UPDATE_COLLECTIONS } from "./shop.types"

export const updateCollections = (collections) => (
    {
        type: UPDATE_COLLECTIONS,
        payload: collections
    }
)